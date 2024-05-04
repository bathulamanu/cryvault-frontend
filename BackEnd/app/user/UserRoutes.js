var userCtrl = require("./UserCtrl");
var auth = require('../../utils/Auth').token;

module.exports = (app) => {
    app.post('/cryovault/api/user/customerRegisterOrLogin', userCtrl.customerSignUpOrLogin);
    app.post('/cryovault/api/user/otpVerify', userCtrl.otpVerify);
    app.post('/cryovault/api/user/customerResendOtp', userCtrl.customerSignUpOrLogin);
    app.post('/cryovault/api/user/createOrder', auth, userCtrl.customerOrderCreation);
    app.post('/cryovault/api/user/customerPayment', auth, userCtrl.customerPaymentVerification); // auth,
    app.get('/cryovault/api/user/getCustomerPaymentDetails', auth, userCtrl.getCustomerPaymentDetails);
}