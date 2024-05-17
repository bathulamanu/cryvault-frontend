// const Cryptr = require('cryptr');
const otpgenerator = require('otp-generator');
var asyncRequest = require('async-request');
var jwt = require('jsonwebtoken');
const env = require("../../config/env/development");
var ResponseHandler = require("../../config/ResponseHandler");
var DisplayMessages = require("../../utils/messages");

const shortid = require('shortid');
const Razorpay = require('razorpay');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const handlebars = require('handlebars');
const util = require('util');
const crypto = require('crypto');

const bcrypt = require('bcrypt');
const puppeteer = require('puppeteer');
const os = require('os');

var customerSignupOrLoginModel = require('./model/customerSignUPModel')
var customerCRNModel = require('./model/customerCRNModel')
var OTPmodel = require('./model/OTPcheckModel')
var CreateOrderModel = require('./model/customerOrdercreateModel');
var paymentVerificationModel = require('./model/CustomerPaymentInfoModel');
var customerSubscriptionModel = require('../customer/customerModel/customerSubscriptionModel');
var emailContentModel = require('../common/model/emailContentModel');
var couponModel = require('../user/model/couponModel');
var customerPaymentSubInfoModel = require('./model/customerPaymentSubInfoModel');
var employeeModel = require('../admin/model/employeeModel');
var tokenResetPwdModel = require('./model/tokenResetPwdModel');

var sendEmail = require('../../mail/mailContent');

const ShortUniqueId = require('short-unique-id');
// var uploadInvoiceFile = require('../common/commonCtrl').upload;
const AWS = require('aws-sdk');
const key = require("../../config/env/development");
AWS.config.update({
    accessKeyId: key.s3.AccessKeyId,
    secretAccessKey: key.s3.SecretAccessKey,
    region: key.s3.region,
});

const s3 = new AWS.S3();


const razorpay = new Razorpay({
    key_id: env.razorpay.Key_Id,
    key_secret: env.razorpay.Key_Secret
});


let usersCtrl = {}

async function invoiceFileRead(file) {
    // console.log("1000000000000000000000000000000 ");
    // console.log("cehck this ", file);
    const { randomUUID } = new ShortUniqueId({ length: 10 });
    // const file = req.file;
    const keyValue = 'Invoice' + '/' + `${randomUUID()}-${file.file}.pdf`;

    const params = {
        Bucket: key.s3.Bucket,
        Key: keyValue,
        Body: fs.createReadStream(file.filePath),
        ACL: 'public-read'
    };

    return new Promise(async (resolve, reject) => {

        s3.upload(params, async (err, data) => {

            if (err) {
                return reject(err);
            }
            else {
                return resolve(data);
            }

        });

    })
}

const generateOTP = async () => {
    let otp = await otpgenerator.generate(6, {
        digits: true,
        lowerCaseAlphabets: false,
        upperCaseAlphabets: false,
        specialChars: false
    });
    return otp;
}

const generateUserSerialId = async () => {
    var ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var ID_LENGTH = 6;
    var rtn = 'CV/HYD/';
    for (var i = 0; i < ID_LENGTH; i++) {
        rtn += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
    }
    return rtn;
}

const generateCRNnoPayment = async () => {
    var ALPHABET = '0123456789';
    var ID_LENGTH = 4;
    var rtn = 'CV/HYD/';
    for (var i = 0; i < ID_LENGTH; i++) {
        rtn += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
    }
    return rtn;
}

const generateUniqueCode = async () => {
    var ALPHABET = '0123456789';
    var ID_LENGTH = 4;
    var rtn = 2;
    for (var i = 0; i < ID_LENGTH; i++) {
        rtn += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
    }
    return rtn;
}


usersCtrl.customerSignUpOrLogin = async (req, res) => {
    try {
        var params = req.body;

        if (!params.countryCode) {
            ResponseHandler.error(req, res, DisplayMessages.countryCodeRequire, "");
            return
        }
        if (!params.phoneNumber) {
            ResponseHandler.error(req, res, DisplayMessages.phoneNumberRequire, "");
            return
        }

        const verifyData = await OTPmodel.find({ phoneNumber: params.phoneNumber, isVerified: false, status: true })

        if (verifyData.length) {

            if (verifyData[0].isBlock) {

                const dateObjectBlock = new Date(verifyData[0].isBlockTime);
                const unixTimestampBlock = Math.floor(dateObjectBlock.getTime());
                if (unixTimestampBlock > Date.now()) {
                    ResponseHandler.error(req, res, DisplayMessages.afterSomeTime, "");
                    return
                }
                else {
                    await OTPmodel.updateOne({ OTPid: verifyData[0].OTPid }, { $set: { status: false } })
                }
            } else {
                const dateObject = new Date(verifyData[0].nextResendTime);
                const unixTimestamp = Math.floor(dateObject.getTime());
                if (unixTimestamp > Date.now()) {
                    ResponseHandler.error(req, res, DisplayMessages.after60Sec, "");
                    return
                }
                if (verifyData[0].resendCount >= 3) {
                    await OTPmodel.updateOne({ OTPid: verifyData[0].OTPid }, { $set: { isBlock: true, isBlockTime: Date.now() + (15 * 60 * 1000) } })
                    ResponseHandler.error(req, res, DisplayMessages.after15Min, "");

                } else {
                    var verify = await sendSMS(params.phoneNumber);
                    const resendDelay = 2 * 60 * 1000;
                    const otpObj = {
                        phoneNumber: params.phoneNumber,
                        OTP: verify.generatedOtp,
                        nextResendTime: Date.now() + (1 * 60 * 1000),
                        blockedUntil: Date.now() + resendDelay
                    }
                    await OTPmodel.updateOne({ OTPid: verifyData[0].OTPid }, {
                        $set: {
                            resendCount: verifyData[0].resendCount + 1, OTP: verify.generatedOtp,
                            nextResendTime: Date.now() + (1 * 60 * 1000),
                            blockedUntil: Date.now() + resendDelay
                        }
                    })
                    ResponseHandler.success(req, res, DisplayMessages.OTPsuccess, { OTPid: verifyData[0].OTPid });
                    return

                }
            }
        } else {

            // isVerified

            var verify = await sendSMS(params.phoneNumber);
            // console.log("ckkkk ", verify);
            if (verify && verify.campid) {
                const resendDelay = 2 * 60 * 1000;
                const otpObj = {
                    phoneNumber: params.phoneNumber,
                    OTP: verify.generatedOtp,
                    nextResendTime: Date.now() + (1 * 60 * 1000),
                    blockedUntil: Date.now() + resendDelay
                }
                await OTPmodel.create(otpObj).then(async (otpInfo) => {
                    ResponseHandler.success(req, res, DisplayMessages.OTPsuccess, { OTPid: otpInfo.OTPid });
                })
                    .catch((err) => {
                        ResponseHandler.error(req, res, "", err);
                    })
            }
            // else if (verify.Expired) {
            //     ResponseHandler.error(req, res, verify.Expired, "");
            // }
            else {
                ResponseHandler.error(req, res, DisplayMessages.ResendOTP, "");
            }
        }

    } catch (err) {
        ResponseHandler.error(req, res, "", err);
    }
}

async function saveCustomerdata(req, res, params) {
    try {
        const registrationCRNid = await generateUserSerialId();
        customerSignupOrLoginModel.find({ phoneNumber: params.phoneNumber }).then((result) => {

            if (result && result.length != 0) {
                Login(result[0], req, res, DisplayMessages.loginSucess);
            }
            else {
                customerSignupOrLoginModel.create(params).then((data) => {
                    let paymentInfo = {
                        customerID: data.customerID
                        // countryCode: params.countryCode,
                        // phoneNumber: params.phoneNumber
                    }
                    let CRN = {
                        customerID: data.customerID,
                        countryCode: params.countryCode,
                        phoneNumber: params.phoneNumber,
                        registrationCRNid: registrationCRNid
                    }
                    customerCRNModel.create(CRN).then(async (crnInfo) => {
                        await payment(req, res, data, paymentInfo);
                    })
                })
                    .catch((err) => {
                        ResponseHandler.error(req, res, "", err);
                    })
            }
        })
    }
    catch (err) {
        ResponseHandler.error(req, res, "", err);
    }
}

function payment(req, res, data, paymentInfo) {
    try {
        paymentVerificationModel.create(paymentInfo).then((info) => {
            Login(data, req, res, DisplayMessages.customerRegistration);
        })
    }
    catch (err) {
        ResponseHandler.error(req, res, "", err);
    }
}



function Login(data, req, res, message) {
    try {
        let obj = {
            "customerID": data.customerID,
            "firstName": data.firstName,
            "lastName": data.lastName,
            "email": data.email,
            "countryCode": data.countryCode,
            "phoneNumber": data.phoneNumber,
            "address": data.address,
            "gender": data.gender,
            "createdTime": data.createdTime,
            "token": "",
            "subscriptionPlanId": null,
            "addressLine1": data.addressLine1,
            "addressLine2": data.addressLine2,
            "nearLandMark": data.nearLandMark,
            "city": data.city,
            "state": data.state,
            "pincode": data.pincode,
            "country": data.country
        }
        obj.token = jwt.sign(obj, env.SecretKey);

        customerCRNModel.aggregate([
            {
                $lookup: {
                    from: "customerpaymentinfos",
                    localField: "customerID",
                    foreignField: "customerID",
                    as: "PaymentData"
                }
            },
            {
                $match: {
                    'customerID': data.customerID
                }
            }
        ]).then((paymnetCRN) => {
            if (paymnetCRN.length != 0) {
                const paymnetCRNDetails = paymnetCRN[0];
                obj['registrationCRNid'] = paymnetCRNDetails.registrationCRNid;
                if (paymnetCRNDetails.PaymentData.length != 0) {
                    const paymentDetails = paymnetCRNDetails.PaymentData[0];
                    obj['subscriptionPlanId'] = paymentDetails.subscriptionPlanId
                    // obj['paymentType'] = paymentDetails.paymentType
                    // obj['paymentStatus'] = paymentDetails.paymentStatus
                }
                ResponseHandler.success(req, res, message, obj);
            }
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })

        // if (result && result.length != 0 && result[0].subscriptionPlanId) {
        // }
        // else {
        //     ResponseHandler.error(req, res, DisplayMessages.Payment, obj);
        // }

    }
    catch (err) {
        ResponseHandler.error(req, res, "", err);
    }
}


usersCtrl.otpVerify = async (req, res) => {
    try {
        var otpPayload = req.body;
        let cusPayload = {
            phoneNumber: otpPayload.phoneNumber,
            countryCode: otpPayload.countryCode
        }

        OTPmodel.find({ OTPid: otpPayload.OTPid }).then(async (otpInfo) => {
            if (!otpInfo.length) {
                return ResponseHandler.error(req, res, DisplayMessages.ValidFieldRequire, "");
            }
            const checkOtpInfo = otpInfo[0];
            const dateObject = new Date(checkOtpInfo.blockedUntil);
            const unixTimestamp = Math.floor(dateObject.getTime());
            if (checkOtpInfo && unixTimestamp < Date.now()) {
                ResponseHandler.error(req, res, DisplayMessages.OTPexpiry, "");
            }
            else if (otpPayload.OTP === checkOtpInfo.OTP) {
                await OTPmodel.updateOne({
                    OTPid: otpPayload.OTPid
                },
                    {
                        $set: {
                            isVerified: 1
                        }
                    })


                saveCustomerdata(req, res, cusPayload)
            }
            else {
                ResponseHandler.error(req, res, DisplayMessages.OTPNotMatch, "");
            }
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, "", err);
    }
}

usersCtrl.employeeOrAdminLogin = async (req, res) => {
    try {
        if (!req.body.email) {
            ResponseHandler.error(req, res, DisplayMessages.emailIdRequired, "");
            return
        }
        if (!req.body.password) {
            ResponseHandler.error(req, res, DisplayMessages.passwordRequired, "");
            return
        }

        employeeModel.find({ email: req.body.email }).then((da) => {
            if (da && da.length != 0) {
                let data = da[0];
                bcrypt.compare(req.body.password, da[0].password, function (err, result) {
                    if (result) {
                        let obj = {
                            "employeeID": data.employeeID,
                            "firstName": data.firstName,
                            "lastName": data.lastName,
                            "email": data.email,
                            "countryCode": data.countryCode,
                            "PhoneNumber": data.PhoneNumber,
                            "roleID": data.roleID,
                            "employeeAutoGeneratedID": data.employeeAutoGeneratedID,
                            "token": ""
                        }
                        obj.token = jwt.sign(obj, env.SecretKey);

                        ResponseHandler.success(req, res, DisplayMessages.loginSucess, obj)
                    }
                    else {
                        ResponseHandler.error(req, res, DisplayMessages.passwordNotMatch, "");
                    }
                });
            }
            else {
                ResponseHandler.error(req, res, DisplayMessages.userNotFound, "");
            }

        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, "", err);
    }
}

usersCtrl.employeeOrAdminForgotPwd = async (req, res) => {
    try {
        employeeModel.find({ email: req.body.email }).then(async (emp) => {
            if (emp && emp.length != 0) {
                const token = crypto.randomBytes(20).toString('hex');
                const emailContent = await getAllEmailContent('Password Reset');
                let Obj = {}
                Obj['Content'] = "";
                if (emailContent && emailContent.length != 0) {
                    // Obj['Content'] = emailContent[0].emailDescription.replace('http://localhost:${port}', 'http://localhost:4000') 
                    //     .replace('${token}', token);

                    Obj['Content'] = emailContent[0].emailDescription.replace('http://localhost:${port}', 'http://18.61.230.105:4000')
                        .replace('${token}', token);

                }
                Obj['Subject'] = 'Flyingbyts Password Reset';
                Obj['Email'] = emp[0].email;
                Obj['Name'] = emp[0].firstName || '';
                await sendEmail.EmailWithoutAttachment(Obj)
                tokenResetPwdModel.create({ token: token, email: req.body.email });
                ResponseHandler.success(req, res, "Sent Email Succesfully", "");
            }
            else {
                ResponseHandler.error(req, res, DisplayMessages.userNotFound, "");
            }
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, "", err);
    }
}

usersCtrl.employeeOrAdminResetPwd = async (req, res) => {
    try {
        const token = req.params.token;

        // res.send(`<form action="/flyingbyts/api/user/employeeOrAdminResetPassword" method="POST">
        //        <input type="hidden" name="token" value="${token}">
        //        <input type="password" name="password" placeholder="New password">
        //        <button type="submit">Reset Password</button>
        //     </form>`);

        res.send(`<!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Password Reset</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
              }
              
              .reset-form {
                background-color: #fff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                width: 300px;
              }
              
              .reset-form h2 {
                margin-top: 0;
                font-size: 24px;
                text-align: center;
              }
              
              .reset-form input[type="password"] {
                width: 100%;
                padding: 10px;
                margin-bottom: 15px;
                border: 1px solid #ccc;
                border-radius: 4px;
                box-sizing: border-box;
              }

              .reset-form input[type="text"] {
                width: 100%;
                padding: 10px;
                margin-bottom: 15px;
                border: 1px solid #ccc;
                border-radius: 4px;
                box-sizing: border-box;
              }
              
              .reset-form button {
                width: 100%;
                background-color: #4CAF50;
                color: white;
                padding: 10px 0;
                border: none;
                border-radius: 4px;
                cursor: pointer;
              }
              
              .reset-form button:hover {
                background-color: #45a049;
              }
              .error-message {
                color: red;
                margin-top: 10px;
            }
            .password-toggle {
                position: relative;
            }
            .password-toggle input[type="password"] {
                padding-right: 30px;
            }
            .password-toggle .toggle-password {
                position: absolute;
                top: 35%;
                right: 10px;
                transform: translateY(-50%);
                cursor: pointer;
            }
            </style>
            </head>
            <body>
            
            <div class="reset-form">
              <h2>Password Reset</h2>
              <form id="resetForm" action="/flyingbyts/api/user/employeeOrAdminResetPassword" method="POST" onsubmit="return validatePassword()">
              <input type="hidden" name="token" value="${token}">
       
              <div class="password-toggle">
              <input type="password" id="newPassword" name="newPassword" placeholder="New Password" required>
              <span class="toggle-password" onclick="togglePasswordVisibility()">
                  <i id="eye-icon" class="fa fa-eye"></i>
              </span>
          </div>              
              <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" required>
              <button type="submit">Reset Password</button>
              <div id="errorMessage" class="error-message" style="display: none;"></div>      
              </form>
              
                 <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/all.min.js"></script>
            </div>

            <script>
           
            function togglePasswordVisibility() {
                var passwordInput = document.getElementById("newPassword");
                var eyeIcon = document.getElementById("eye-icon");
    
                if (passwordInput.type === "password") {
                    passwordInput.type = "text";
                    eyeIcon.className = "fa fa-eye-slash";
                } else {
                    passwordInput.type = "password";
                    eyeIcon.className = "fa fa-eye";
                }
            }
            
            function validatePassword() {
                var password = document.getElementById("newPassword").value;
                var confirmPassword = document.getElementById("confirmPassword").value;    
              
                var passwordRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            
                if (password !== confirmPassword) {
                    event.preventDefault();
                    errorMessage.textContent = 'New and confirm passwords do not match.';
                    errorMessage.style.display = 'block';
                    return false;
                }
                else if(password === confirmPassword){
                    errorMessage.style.display = 'none';
                }

                console.log("kkkkkkkkkkkkkkkkkkkkkkkkkk done done ",password)
                console.log("kkkpasswordRegex.test(password)  ",passwordRegex.test(password))

                // if (passwordRegex.test(password) == false) {
                //     event.preventDefault();
                //     errorMessage.textContent = 'Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long.';
                //     errorMessage.style.display = 'block';
                //     return false;
                // }
                // else if(passwordRegex.test(password) == true){
                //     errorMessage.style.display = 'none';
                // }
                               
                console.log("lllllllllllllllllllllllllllllllll  ",passwordRegex.test(password), password)
                return true;
            }

            </script>
            
            </body>
            </html>
            `)

    }
    catch (err) {
        ResponseHandler.error(req, res, "", err);
    }
}

usersCtrl.employeeOrAdminResetPassword = async (req, res) => {
    try {
        const { token, newPassword } = req.body;
        console.log("kkkkkkkkkkkkkkjjjjjjj ", req.body);

        tokenResetPwdModel.find({ token: token, status: true }).then((data) => {
            if (data && data.length != 0) {
                bcrypt.hash(newPassword, 10, function (err, hash) {
                    if (err) {
                        ResponseHandler.error(req, res, "", err);
                    }
                    else {
                        employeeModel.updateOne({ email: data[0].email }, { $set: { password: hash } }).then(async (emp) => {
                            res.send(`<!DOCTYPE html>
                            <html lang="en">
                            <head>
                                <meta charset="UTF-8">
                                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                <title>Password Updated Successfully</title>
                                <style>
                                    body {
                                        font-family: Arial, sans-serif;
                                        margin: 0;
                                        padding: 0;
                                        background-color: #f5f5f5;
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                        height: 100vh;
                                    }

                                    .container {
                                        text-align: center;
                                    }

                                    .success-message {
                                        color: #4CAF50;
                                        font-size: 24px;
                                    }

                                    .redirect-message {
                                        margin-top: 20px;
                                        color: #333;
                                    }

                                    .redirect-message a {
                                        color: #007bff;
                                        text-decoration: none;
                                    }

                                    .redirect-message a:hover {
                                        text-decoration: underline;
                                    }
                                </style>
                            </head>
                            <body>
                                <div class="container">
                                    <div class="success-message">Password Updated Successfully!</div>
                                    <div class="redirect-message">click here to redirect to <a href="/">home page</a>.</div>
                                </div>
                            </body>
                            </html>
                            `);
                        })
                            .catch((err) => {
                                ResponseHandler.error(req, res, "", err);
                            })
                    }
                })
            }
            else {
                res.send(`<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Password Updated Successfully</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            margin: 0;
                            padding: 0;
                            background-color: #f5f5f5;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            height: 100vh;
                        }

                        .container {
                            text-align: center;
                        }

                        .success-message {
                            color: red;
                            font-size: 24px;
                        }

                        .redirect-message {
                            margin-top: 20px;
                            color: #333;
                        }

                        .redirect-message a {
                            color: #007bff;
                            text-decoration: none;
                        }

                        .redirect-message a:hover {
                            text-decoration: underline;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="success-message">User Not Found</div>
                    </div>
                </body>
                </html>
                `);

            }
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, "", err);
    }
}

usersCtrl.addSuperAdmin = async (req, res) => {
    try {
        bcrypt.hash(req.body.password, 10, function (err, hash) {
            if (err) {
                ResponseHandler.error(req, res, "", err);
            }
            else {
                req.body.password = hash;
                employeeModel.create(req.body).then((response) => {
                    ResponseHandler.success(req, res, DisplayMessages.addingEmployee, "")
                })
                    .catch((err) => {
                        ResponseHandler.error(req, res, "", err);
                    })
            }
        });
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}


async function sendSMS(recipient) {
    try {
        // console.log("cehck this");
        var username = env.MobileOTP.username
        var apikey = env.MobileOTP.apikey
        var senderId = env.MobileOTP.senderId
        var message = env.MobileOTP.message
        var otp = await generateOTP();


        message = message.replace('%7B%23var%23%7D', `${otp}`)
        const url = `http://onlinebulksmslogin.com/v3/api.php?username=${username}&apikey=${apikey}&senderid=${senderId}&mobile=${recipient}&message=${message}`;
        const response = await axios.get(url);

        return { campid: response.data, generatedOtp: otp }


    } catch (error) {
        console.error('Error sending SMS:', error);
    }
}


usersCtrl.customerOrderCreation = async (req, res) => {
    try {
        if (!req.body.amount) {
            ResponseHandler.error(req, res, DisplayMessages.amountRequire, "");
            return
        }
        if (!req.body.currency) {
            ResponseHandler.error(req, res, DisplayMessages.CurrencyRequire, "");
            return
        }

        const { amount, currency } = req.body;

        const order = await razorpay.orders.create({
            amount: amount * 100,
            currency: currency,
            receipt: uuidv4(),
            payment_capture: 1
        });

        let obj = {};
        obj['OrderCode'] = order.id;
        obj['customerID'] = req.user.customerID;
        obj['ReceiptID'] = order.receipt
        obj['Amount'] = amount * 100
        obj['Currency'] = currency

        CreateOrderModel.create(obj).then((info) => {
            ResponseHandler.success(req, res, DisplayMessages.orderCreate, { ...order, key: env.razorpay.Key_Id })
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })

    } catch (err) {
        ResponseHandler.error(req, res, DisplayMessages.OrderFail, err);
    }
}


async function getAllEmailContent(filterParam) {
    return new Promise(async (resolve, reject) => {
        // appointment
        emailContentModel.find({ status: true, name: filterParam }).then((response) => {
            // console.log("responce get all ", response);
            return resolve(response)
        })
            .catch((err) => {
                return reject(err)
            })
    })
}

usersCtrl.customerPaymentVerification = async (req, res) => {
    try {

        if (!req.body.payment.OrderCode) {
            ResponseHandler.error(req, res, DisplayMessages.OrderCodeRequired, "");
            return;
        }

        CreateOrderModel.find({ OrderCode: req.body.payment.OrderCode }).then(async (order) => {
            if (order.length != 0) {

                req.body.payment['GUID'] = order[0].ReceiptID;
                req.body.payment['customerID'] = req.user.customerID;
                req.body.payment['paymentDate'] = new Date().toISOString();
                const crnNo = await generateCRNnoPayment();
                req.body.payment['CRNno'] = crnNo;

                // console.log("kkkkkkkkkkkkk  ", req.body.payment);


                const paymentDetails = await oldHistory(req, res, req.body.payment);
                // ResponseHandler.success(req, res, "hhhhhhhhhhhhhhhhhhhh ", paymentDetails);

                if (paymentDetails.customerPaymentId) {
                    paymentVerificationModel.updateOne({ customerID: req.user.customerID }, { $set: paymentDetails })
                        .then(async (pay) => {

                            paymentVerificationModel.aggregate([
                                {
                                    $lookup: {
                                        from: "customersubscriptionplans",
                                        localField: "subscriptionPlanId",
                                        foreignField: "subscriptionID",
                                        as: "subscriptionDetails"
                                    }
                                },
                                {
                                    $lookup: {
                                        from: "customers",
                                        localField: "customerID",
                                        foreignField: "customerID",
                                        as: "customerDetails"
                                    }
                                },
                                {
                                    $match: {
                                        'customerID': req.user.customerID
                                    }
                                }
                            ]).then(async (sub) => {
                                let invObj = {}
                                if (sub.length != 0) {
                                    data = sub[0];
                                    ResponseHandler.success(req, res, "dara ", data);
                                    const invoiceFile = await invoiceGeneration(req.user.customerID, sub[0], data.customerDetails[0], data.subscriptionDetails[0]);
                                    if (invoiceFile && invoiceFile.filePath) {
                                        const s3FileName = await invoiceFileRead(invoiceFile);
                                        if (s3FileName && s3FileName.key) {
                                            req.body.payment['invoiceFile'] = s3FileName.key;


                                            if (data.customerDetails && data.customerDetails.length != 0) {
                                                const emailContent = await getAllEmailContent('invoice');
                                                invObj['Content'] = "";
                                                if (emailContent && emailContent.length != 0) {
                                                    invObj['Content'] = emailContent[0].emailDescription;
                                                }
                                                invObj['Subject'] = 'Flyingbyts Invoice File';
                                                invObj['Email'] = data.customerDetails[0].email;
                                                invObj['Name'] = data.customerDetails[0].firstName;
                                                invObj['File'] = {
                                                    fileName: s3FileName.key,
                                                    filePath: invoiceFile.filePath
                                                }
                                                await sendEmail.EmailWithInvoicePDF(invObj)
                                            }

                                            ResponseHandler.success(req, res, DisplayMessages.PaymentUpdate, pay);

                                        }
                                        else {
                                            ResponseHandler.error(req, res, DisplayMessages.Error, "");
                                        }
                                    }
                                    else {
                                        ResponseHandler.error(req, res, DisplayMessages.Error, "");
                                    }

                                }

                            })
                                .catch((err) => {
                                    ResponseHandler.error(req, res, "", err);
                                })

                        })
                        .catch((err) => {
                            ResponseHandler.error(req, res, "", err);
                        })
                }
                else {
                    ResponseHandler.error(req, res, "Error", "");
                }
            }
            else {
                ResponseHandler.error(req, res, DisplayMessages.OrderNotFOund, "");
            }
        })

    }
    catch (err) {
        ResponseHandler.error(req, res, "", err);
    }

}

async function oldHistory(req, res, payment) {
    try {
        return new Promise(async (resolve, reject) => {
            paymentVerificationModel.find({ customerID: req.user.customerID }).then((mm) => {
                payment['customerPaymentId'] = mm[0].customerPaymentId;
                customerPaymentSubInfoModel.create(payment).then((ch) => {
                    if (ch) {

                        customerPaymentSubInfoModel.find({ customerID: req.user.customerID }).then((data) => {
                            var count = 0;
                            var result = count.toFixed(2);
                            var needToPay;
                            if (data && data.length != 0) {
                                data.forEach(x => {
                                    result = parseFloat(result) + parseFloat(x.paidAmount)
                                })
                                if (payment.coupon && payment.coupon.couponID) {
                                    needToPay = payment.totalAmount - payment.coupon.discountValue;
                                }
                                else {
                                    needToPay = payment.totalAmount;
                                }
                                if (needToPay == result) {
                                    payment['totalPendingAmount'] = '0.00';
                                    payment['pendingAmount'] = '0.00';
                                    payment['paymentStatus'] = 'Completed';
                                    payment['totalPaidAmount'] = needToPay;
                                }
                                else {
                                    const remainingAmount = needToPay - result
                                    payment['totalPendingAmount'] = remainingAmount.toFixed(2);
                                    payment['pendingAmount'] = remainingAmount.toFixed(2);
                                    payment['paymentStatus'] = 'Partial';
                                    payment['totalPaidAmount'] = result.toFixed(2);
                                }
                                customerPaymentSubInfoModel.updateOne({ customerPaymentSubId: ch._doc.customerPaymentSubId },
                                    { $set: payment })
                                    .then((dd) => {
                                        return resolve(payment);
                                    })
                                    .catch((err) => {
                                        return reject({ Error: err });
                                    })
                            }

                        })
                            .catch((err) => {
                                ResponseHandler.error(req, res, "", err);
                            })
                    }
                })
                    .catch((err) => {
                        ResponseHandler.error(req, res, "", err);
                    })
            })
                .catch((err) => {
                    ResponseHandler.error(req, res, "", err);
                })
        })
    }
    catch (err) {
        ResponseHandler.error(req, res, "", err);
    }
}

usersCtrl.getCustomerPaymentDetails = async (req, res) => {
    try {

        customerSignupOrLoginModel.aggregate([
            {
                $lookup: {
                    from: "customerpaymentinfos",
                    localField: "customerID",
                    foreignField: "customerID",
                    as: "PaymentDetails"
                }
            },
            {
                $match: {
                    'customerID': req.user.customerID
                }
            },
            {
                $project: {
                    _id: 0,
                    createdTime: 0,
                    updatedTime: 0,
                    __v: 0,
                    status: 0,
                    'PaymentDetails._id': 0,
                    "PaymentDetails.updatedTime": 0,
                    "PaymentDetails.status": 0,
                    "PaymentDetails.createdTime": 0,
                    "PaymentDetails.__v": 0
                }
            }
        ]).then((payment) => {
            ResponseHandler.success(req, res, DisplayMessages.DataFound, payment)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, "", err);
    }
}



async function invoiceGeneration(customerID, paymentdetails, customerDetails, subscriptionItem) {
    console.log("inoice invoice ");
    const jpegFilePath = './public/images/cryoVaultLogo.jpeg';
    const jpegData = fs.readFileSync(jpegFilePath);
    const base64Data = Buffer.from(jpegData).toString('base64');
    const template = fs.readFileSync('./app/user/invoice_template.html', 'utf8');
    const compiledTemplate = handlebars.compile(template);

    const newFileName = 'INV-' + customerID + '-' + await generateUniqueCode();
    const invoiceData = {
        invoiceNumber: newFileName,
        date: new Date().toISOString().split('T')[0],//'2024-04-19',
        items: [
            { sno: 1, description: subscriptionItem.title, quantity: 1, price: subscriptionItem.offerPrice, total: subscriptionItem.offerPrice }
        ],
        totalAmount: subscriptionItem.offerPrice,
        Logo: 'data:image/jpeg;base64,' + base64Data,
        PaymentDetails: {
            paymentType: paymentdetails.paymentType,
            paidAmount: paymentdetails.paidAmount,
            paymentDate: paymentdetails.paymentDate
        },
        customerDetails: {
            firstName: customerDetails.firstName,
            lastName: customerDetails.lastName,
            email: customerDetails.email,
            countryCode: customerDetails.countryCode,
            phoneNumber: customerDetails.phoneNumber,
            address: customerDetails.addressLine1 + ',' + customerDetails.addressLine2 + ',' + customerDetails.nearLandMark
                + ',' +
                customerDetails.city + ',' + customerDetails.state + ',' + customerDetails.country + ',' + customerDetails.pincode
        }
    };

    const invoiceHTML = compiledTemplate(invoiceData);

    const file = newFileName + '.pdf';
    var newInvoiceFilePath = 'invoice/' + file;
    const filePath = await convertHtmlToPdf(invoiceHTML, newInvoiceFilePath, newFileName);
    // console.log("hhhhhhhhhh filePath ",filePath);
    return filePath;
}

async function convertHtmlToPdf(invoiceHTML, pdfFilePath, newFileName) {
    try {
        // console.log("pdf genrator  ");
        return new Promise(async (resolve, reject) => {
            const isWindows = os.platform() === 'win32';
            const browser = await puppeteer.launch({
                executablePath: isWindows ? '' : '/usr/bin/chromium-browser',
                args: ['--no-sandbox', '--disable-setuid-sandbox']
            });

            const page = await browser.newPage();

            await page.setContent(invoiceHTML);
            const pdfOptions = {
                path: pdfFilePath,
                format: 'A4'
            };

            const pdfFile = await page.pdf(pdfOptions);
            if (pdfFile) {
                resolve({ filePath: pdfFilePath, file: newFileName })
            }
            else {
                return reject({ Error: "Error while generating PDF file, please try again later" });
            }
            await browser.close();
        })
    } catch (error) {
        console.error('Error generating PDF:', error);
        throw error;
    }
}

usersCtrl.addCoupon = async (req, res) => {
    try {
        couponModel.create(req.body).then((foo) => {
            ResponseHandler.success(req, res, DisplayMessages.AddCoupon, "")
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })

    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

usersCtrl.UpdateCoupon = async (req, res) => {
    try {

        if (!req.params.couponID) {
            ResponseHandler.error(req, res, DisplayMessages.CouponIDRequired, "");
            return;
        }
        couponModel.create(req.body).then((re) => {
            let obj = {}
            obj['updatedTime'] = new Date().toISOString();
            obj['updatedBy'] = 1;
            obj['status'] = false;
            couponModel.updateOne({ couponID: req.params.couponID }, { $set: obj }).then((icon) => {
                ResponseHandler.success(req, res, DisplayMessages.UpdatedCoupon, icon)
            })
                .catch((err) => {
                    ResponseHandler.error(req, res, "", err);
                })

        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })


    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

usersCtrl.getCoupon = async (req, res) => {
    try {
        couponModel.find({ status: true }, {
            "status": 0,
            "createdTime": 0,
            "__v": 0,
            "updatedBy": 0,
            "updatedTime": 0
        }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.GetCoupon, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

usersCtrl.deleteCoupon = async (req, res) => {
    try {

        if (!req.params.couponID) {
            ResponseHandler.error(req, res, DisplayMessages.CouponIDRequired, "");
            return;
        }
        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        req.body['status'] = false;
        couponModel.updateOne({ couponID: req.params.couponID }, { $set: req.body }).then((icon) => {
            ResponseHandler.success(req, res, DisplayMessages.deleteCoupon, icon)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })


    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}


module.exports = usersCtrl;