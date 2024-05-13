var ResponseHandler = require("../../config/ResponseHandler");
var DisplayMessages = require("../../utils/messages");
var moment = require('moment');


var customerSignupOrLoginModel = require('../user/model/customerSignUPModel');
var babyModel = require('../admin/model/babyModel');
var CustomerPaymentInfoModel = require('../user/model/CustomerPaymentInfoModel');



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


module.exports = adminCtrl;