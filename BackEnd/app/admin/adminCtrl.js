var ResponseHandler = require("../../config/ResponseHandler");
var DisplayMessages = require("../../utils/messages");
var moment = require('moment');


var customerSignupOrLoginModel = require('../user/model/customerSignUPModel');
var babyModel = require('../admin/model/babyModel');
var CustomerPaymentInfoModel = require('../user/model/CustomerPaymentInfoModel');
var employeeModel = require('./model/employeeModel');
var sendEmail = require('../../mail/mailContent');


var emailContentModel = require('../common/model/emailContentModel');
const bcrypt = require('bcrypt');

let adminCtrl = {};

adminCtrl.getAdminDetails = async (req, res) => {
    try {
        console.log("admin detals ");

    } catch (error) {
        console.log(error);
    }
}

adminCtrl.getCustomerList = async (req, res) => {
    try {
        customerSignupOrLoginModel.find({ status: true }).then((cust) => {
            ResponseHandler.success(req, res, DisplayMessages.foundCustomerList, cust);
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })

    } catch (error) {
        ResponseHandler.error(req, res, "", error);
    }
}

adminCtrl.addBabyDetails = async (req, res) => {
    try {
        babyModel.create(req.body).then((so) => {
            ResponseHandler.success(req, res, DisplayMessages.babyDetailsAdded, "")
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })

    } catch (error) {
        ResponseHandler.error(req, res, "", error);
    }
}

adminCtrl.getBabyDetails = async (req, res) => {
    try {
        if (req.params.customerID) {
            babyModel.find({ customerID: req.params.customerID }).then((ba) => {
                ResponseHandler.success(req, res, DisplayMessages.getBabyDetails, ba)
            })
                .catch((err) => {
                    ResponseHandler.error(req, res, "", err);
                })
        }

    } catch (error) {
        ResponseHandler.error(req, res, "", error);
    }
}


adminCtrl.getAllBabyDetails = async (req, res) => {
    try {
        babyModel.find({ status: true }).then((ba) => {
            ResponseHandler.success(req, res, DisplayMessages.getBabyDetails, ba)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })

    } catch (error) {
        ResponseHandler.error(req, res, "", error);
    }
}


adminCtrl.updateBabyDetails = async (req, res) => {
    try {

        if (!req.params.babyID) {
            ResponseHandler.error(req, res, DisplayMessages.babyIDRequired, "");
            return;
        }

        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;

        babyModel.updateOne({ babyID: req.params.babyID }, { $set: req.body }).then((icon) => {
            ResponseHandler.success(req, res, DisplayMessages.babyDetailsUpdated, icon)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })

    } catch (error) {
        ResponseHandler.error(req, res, "", error);
    }
}

adminCtrl.deleteBabyDetails = async (req, res) => {
    try {

        if (!req.params.babyID) {
            ResponseHandler.error(req, res, DisplayMessages.babyIDRequired, "");
            return;
        }

        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        req.body['status'] = false

        emailContentModel.updateOne({ babyID: req.params.babyID }, { $set: req.body }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.deleteBabyDetails, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}


adminCtrl.getCustomerPaymentDetails = async (req, res) => {
    try {

        CustomerPaymentInfoModel.aggregate([
            {
                $lookup: {
                    from: "customers",
                    localField: "customerID",
                    foreignField: "customerID",
                    as: "CustomerDetails"
                }
            },
            {
                $match: {
                    'customerID': req.user.customerID
                }
            },
            {
                $lookup: {
                    from: "customerpaymentsubinfos",
                    localField: "customerPaymentId",
                    foreignField: "customerPaymentId",
                    as: "PaymentSubDetails"
                }
            },
            {
                $project: {
                    'CustomerDetails._id': 0,
                    'CustomerDetails.createdTime': 0,
                    'CustomerDetails.updatedTime': 0,
                    'CustomerDetails.__v': 0,
                    'CustomerDetails.status': 0,
                    '_id': 0,
                    "updatedTime": 0,
                    "status": 0,
                    "createdTime": 0,
                    "__v": 0
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

adminCtrl.deleteCustomer = async (req, res) => {
    try {
        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        req.body['status'] = false;
        customerSignupOrLoginModel.updateOne({ customerID: req.params.customerID }, { $set: req.body }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.deleteCustomerInfo, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

async function getAllEmailContent(filterParam) {
    return new Promise(async (resolve, reject) => {
        // appointment
        emailContentModel.find({ status: true, name: filterParam }).then((response) => {

            return resolve(response)
        })
            .catch((err) => {
                return reject(err)
            })
    })
}


adminCtrl.addEmployee = async (req, res) => {
    try {
        req.body['createdBy'] = req.user.employeeAutoGeneratedID;
        let originalString = req.body.password;
        bcrypt.hash(req.body.password, 10, function (err, hash) {
            if (err) {
                ResponseHandler.error(req, res, "", err);
            }
            else {
                var obj = {}
                req.body.password = hash;

                employeeModel.find({ email: req.body.email, PhoneNumber: req.body.PhoneNumber }).then((da) => {

                    if (da && da.length == 0) {
                        employeeModel.create(req.body).then(async (emp) => {

                            const emailContent = await getAllEmailContent('Add Employee');
                            if (emailContent && emailContent.length != 0) {
                                obj['Content'] = emailContent[0].emailDescription.replace('@Email@', emp.email).replace('@Password@', originalString);
                            }
                            obj['Subject'] = 'Welcome to Cryovault';
                            obj['Email'] = emp.email;
                            obj['Name'] = emp.firstName || '';
                            await sendEmail.EmailWithoutAttachment(obj)

                            employeeModel.find({ roleID: 3 }).then(async (suad) => {
                                var sup = {}
                                const emailContent = await getAllEmailContent('Acknowledgment of Employee Adding');
                                if (emailContent && emailContent.length != 0) {
                                    sup['Content'] = emailContent[0].emailDescription.replace('@EmployeeName@', req.body.firstName).replace('@Email@', req.body.email).
                                        replace('@Role@', req.body.roleName);
                                }
                                sup['Subject'] = 'Cryovault Acknowledgment - Employee Added';
                                sup['Email'] = suad[0].email;
                                sup['Name'] = suad[0].firstName || '';
                                await sendEmail.EmailWithoutAttachment(sup)
                            })

                            ResponseHandler.success(req, res, DisplayMessages.addingEmployee, "")
                        })
                            .catch((err) => {
                                ResponseHandler.error(req, res, "", err);
                            })
                    }
                    else {
                        ResponseHandler.error(req, res, DisplayMessages.UserExisits, "");
                    }
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

adminCtrl.getEmployee = async (req, res) => {
    try {
        employeeModel.find({ status: true }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.getEmployee, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}




adminCtrl.UpdateEmployee = async (req, res) => {
    try {
        if (!req.params.employeeAutoGeneratedID) {
            ResponseHandler.error(req, res, DisplayMessages.EmployeeIDRequired, "");
            return;
        }
        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        if (req.body.roleID != 3) {
            employeeModel.updateOne({ employeeAutoGeneratedID: req.params.employeeAutoGeneratedID }, { $set: req.body }).then((response) => {
                ResponseHandler.success(req, res, DisplayMessages.updatingEmployee, response)
            })
                .catch((err) => {
                    ResponseHandler.error(req, res, "", err);
                })
        }
        else {
            ResponseHandler.error(req, res, "Permission Denied", err);
        }
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}


adminCtrl.deleteEmployee = async (req, res) => {
    try {
        if (!req.params.employeeAutoGeneratedID) {
            ResponseHandler.error(req, res, DisplayMessages.EmployeeIDRequired, "");
            return;
        }
        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        req.body['status'] = false;
        if (req.body.roleID != 3) {
            employeeModel.updateOne({ employeeAutoGeneratedID: req.params.employeeAutoGeneratedID }, { $set: req.body }).then((response) => {
                ResponseHandler.success(req, res, DisplayMessages.deleteEmployee, response)
            })
                .catch((err) => {
                    ResponseHandler.error(req, res, "", err);
                })
        }
        else {
            ResponseHandler.error(req, res, "Permission Denied", err);
        }
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

module.exports = adminCtrl;