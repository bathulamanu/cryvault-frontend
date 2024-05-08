var ResponseHandler = require("../../config/ResponseHandler");
var DisplayMessages = require("../../utils/messages");
// const Cryptr = require('cryptr');
// const cryptr = new Cryptr('cryovault');


var customerSignupOrLoginModel = require('../user/model/customerSignUPModel')
var customerSubscriptionModel = require('./customerModel/customerSubscriptionModel')
var customerAnnexureInformationModel = require('./customerModel/customerAnnexureInformationModel')
var customerAnnexureSubInformationModel = require('./customerModel/customerAnnexureSubInformationModel')
var genderModel = require('./customerModel/genderModel')
var customerHelpModel = require('./customerModel/customerHelpModel')
var customerHelpAnyIssueModel = require('./customerModel/customerHelpAnyIssueModel')
var customerHelpMobileNumberChangeModel = require('./customerModel/customerHelpMobileNumberChangeModel')
var customerHelpHospitalDetailsChangeModel = require('./customerModel/customerHelpHospitalDetailsChangeModel')
var customerHelpExecutiveDetailsModel = require('./customerModel/customerHelpExecutiveDetailsModel')
var customerHelpNomineeDetailsChangeModel = require('./customerModel/customerHelpNomineeDetailsChangeModel')
var customerHelpCommunicationDetailsChangeModel = require('./customerModel/customerHelpCommunicationDetailsChangeModel')
var customerBabyDetailsModel = require('./customerModel/customerBabyDetailsModel');
var logModel = require('../user/model/logModel');


let customerCtrl = {};


customerCtrl.updateCustomerInfo = async (req, res) => {
    try {
        const payload = req.body;
        payload['updatedTime'] = new Date().toISOString();
        const oldDocument = await customerSignupOrLoginModel.findOne({ customerID: req.user.customerID });

        await customerSignupOrLoginModel.updateOne({ customerID: req.user.customerID }, { $set: payload }).then(async (info) => {
            const updatedDocument = await customerSignupOrLoginModel.findOne({ customerID: req.user.customerID });


            for (const key in updatedDocument) {
                if (oldDocument._doc[key] !== updatedDocument._doc[key] && key !== "_id" && key !== "createdTime" && key !== "updatedTime") {
                    let obj = {};
                    obj['oldValue'] = oldDocument[key];
                    obj['newValue'] = updatedDocument[key];
                    obj['tableName'] = 'customers';
                    obj['typeOfOperation'] = 'update';
                    obj['updatedBy'] = req.user.customerID;
                    obj['typeOfUser'] = 'customer';
                    obj['recordID'] = oldDocument._doc._id;
                    obj['field'] = key;
                    logModel.create(obj);
                }
            }

            if (info && info.matchedCount) {
                ResponseHandler.success(req, res, DisplayMessages.updateperofile, "");
            }
            else {
                ResponseHandler.success(req, res, DisplayMessages.userNotFound, "");
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

customerCtrl.createSubscriptionPlan = async (req, res) => {
    try {
        const body = req.body;

        customerSubscriptionModel.create(body).then((plan) => {
            ResponseHandler.success(req, res, DisplayMessages.saveSubscriptionPlan, "");
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })

    }
    catch (err) {
        ResponseHandler.error(req, res, "", err);
    }
}


customerCtrl.UpdateSubscriptionPlan = async (req, res) => {
    try {
        const body = req.body;

        customerSubscriptionModel.create(body).then((plan) => {
            let obj = {}
            obj['updatedTime'] = new Date().toISOString();
            obj['updatedBy'] = 1;
            obj['status'] = false;
            customerSubscriptionModel.updateOne({ subscriptionID: req.params.subscriptionID }, { $set: obj }).then(async (sub) => {
                ResponseHandler.success(req, res, DisplayMessages.updateSubscriptionPlan, "");
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
        ResponseHandler.error(req, res, "", err);
    }
}


customerCtrl.getSubscriptionPlan = async (req, res) => {
    try {
        customerSubscriptionModel.find({ status: true }).then((plan) => {
            ResponseHandler.success(req, res, DisplayMessages.getSubscriptionPlanDetails, plan);
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, "", err);
    }
}


customerCtrl.deleteSubscriptionPlan = async (req, res) => {
    try {

        const body = req.body;
        body['updatedTime'] = new Date().toISOString();
        body['updatedBy'] = 1;
        body['status'] = false;

        customerSubscriptionModel.updateOne({ subscriptionID: req.params.subscriptionID }, { $set: body }).then((plan) => {
            ResponseHandler.success(req, res, DisplayMessages.deleteSubscriptionPlanDetails, plan);
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, "", err);
    }
}


customerCtrl.addOrupdateAnnexureInfo = async (req, res) => {
    try {
        const params = req.body;
        if (params.customerAnnexureInformationId) {
            customerAnnexureInformationModel.updateOne({ customerID: req.user.customerID }, { $set: params }).then((main) => {
                // console.log("cehck kkk ", main);
                customerAnnexureSubInformationModel.updateOne({ customerID: req.user.customerID }, { $set: params }).then((sub) => {
                    ResponseHandler.success(req, res, DisplayMessages.updateCustomerAnnexureInformation, "");
                })
            })
                .catch((err) => {
                    ResponseHandler.error(req, res, "", err);
                })
        }
        else {
            params['customerID'] = req.user.customerID;
            customerAnnexureInformationModel.create(params).then((plan) => {
                params['customerAnnexureInformationId'] = plan.customerAnnexureInformationId
                customerAnnexureSubInformationModel.create(params).then((data) => {
                    ResponseHandler.success(req, res, DisplayMessages.saveCustomerAnnexureInformation, "");
                })
            })
                .catch((err) => {
                    ResponseHandler.error(req, res, "", err);
                })
        }

    }
    catch (err) {
        // console.log("cehck   ghj ", err);
        ResponseHandler.error(req, res, "", err);
    }
}

customerCtrl.getAnnexureInfo = async (req, res) => {
    try {
        customerAnnexureInformationModel.aggregate([
            {
                $lookup: {
                    from: "customerannexuresubinformations",
                    localField: "customerAnnexureInformationId",
                    foreignField: "customerAnnexureInformationId",
                    as: "CustomerData"
                }
            },
            {
                $match: {
                    'customerID': req.user.customerID
                }
            }
        ]).then((info) => {
            ResponseHandler.success(req, res, DisplayMessages.getAnnexcureInformation, info);
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, "", err);
    }
}



customerCtrl.addOrUpdateGender = async (req, res) => {
    try {
        const body = req.body;
        if (body.genderID) {

            body['updatedTime'] = new Date().toISOString();
            body['updatedBy'] = 1
            // console.log(body.genderID);

            genderModel.updateOne({ genderID: body.genderID }, { $set: body }).then((sub) => {
                ResponseHandler.success(req, res, DisplayMessages.updateSubscriptionPlan, "");
            })
                .catch((err) => {
                    ResponseHandler.error(req, res, "", err);
                })
        }
        else {
            genderModel.create(req.body).then((plan) => {
                ResponseHandler.success(req, res, DisplayMessages.genderAdding, "");
            })
                .catch((err) => {
                    ResponseHandler.error(req, res, "", err);
                })
        }
    }
    catch (err) {
        ResponseHandler.error(req, res, "", err);
    }
}

customerCtrl.getGender = async (req, res) => {
    try {
        genderModel.find({}).then((plan) => {
            ResponseHandler.success(req, res, DisplayMessages.genderList, plan);
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, "", err);
    }
}

customerCtrl.addOrUpdateHelp = async (req, res) => {
    try {
        // console.log("cehck this ",req.body);
        customerHelpModel.create(req.body).then((plan) => {
            ResponseHandler.success(req, res, DisplayMessages.recordAdd, "");
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, "", err);
    }
}

customerCtrl.getHelpDetails = async (req, res) => {
    try {
        // console.log("cehck this ",req.body);
        customerHelpModel.find({ status: true }).then((help) => {
            ResponseHandler.success(req, res, DisplayMessages.recordGet, help);
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, "", err);
    }
}



customerCtrl.addCustomerAnyDetailsIssue = async (req, res) => {
    try {
        req.body['customerID'] = req.user.customerID
        customerHelpAnyIssueModel.create(req.body).then((que) => {
            ResponseHandler.success(req, res, DisplayMessages.createRecord, "");
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, "", err);
    }

}

customerCtrl.getCustomerAnyDetailsIssue = async (req, res) => {
    try {

        customerHelpAnyIssueModel.aggregate([
            {
                $lookup: {
                    from: "customers",
                    localField: "customerID",
                    foreignField: "customerID",
                    as: "CustomerData"
                }
            },
            {
                $lookup: {
                    from: "customerhelps",
                    localField: "customerHelpTitleNo",
                    foreignField: "customerHelpTitle.customerHelpTitleID",
                    as: "Questions"
                }
            }
        ]).then((questions) => {
            ResponseHandler.success(req, res, DisplayMessages.recordGet, questions);
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, "", err);
    }

}

// ------------------------------------------------------------------------


customerCtrl.addCustomerMobileNumberChangeIssue = async (req, res) => {
    try {
        req.body['customerID'] = req.user.customerID
        customerHelpMobileNumberChangeModel.create(req.body).then((que) => {
            ResponseHandler.success(req, res, DisplayMessages.createRecord, "");
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, "", err);
    }

}

customerCtrl.getCustomerMobileNumberChangeIssue = async (req, res) => {
    try {
        customerHelpMobileNumberChangeModel.aggregate([
            {
                $lookup: {
                    from: "customers",
                    localField: "customerID",
                    foreignField: "customerID",
                    as: "CustomerData"
                }
            },
            {
                $lookup: {
                    from: "customerhelps",
                    localField: "customerHelpTitleNo",
                    foreignField: "customerHelpTitle.customerHelpTitleID",
                    as: "Questions"
                }
            }
        ])
            .then((questions) => {
                ResponseHandler.success(req, res, DisplayMessages.recordGet, questions);
            })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, "", err);
    }

}

// ------------------------------------------------------------------------------------


customerCtrl.addCustomerHospitalDetailsChangeIssue = async (req, res) => {
    try {
        req.body['customerID'] = req.user.customerID
        customerHelpHospitalDetailsChangeModel.create(req.body).then((que) => {
            ResponseHandler.success(req, res, DisplayMessages.createRecord, "");
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, "", err);
    }

}

customerCtrl.getCustomerHospitalDetailsChangeIssue = async (req, res) => {
    try {
        customerHelpHospitalDetailsChangeModel.aggregate([
            {
                $lookup: {
                    from: "customers",
                    localField: "customerID",
                    foreignField: "customerID",
                    as: "CustomerData"
                }
            },
            {
                $lookup: {
                    from: "customerhelps",
                    localField: "customerHelpTitleNo",
                    foreignField: "customerHelpTitle.customerHelpTitleID",
                    as: "Questions"
                }
            }
        ])
            .then((questions) => {
                ResponseHandler.success(req, res, DisplayMessages.recordGet, questions);
            })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, "", err);
    }

}
// ------------------------------------------------------------------------------------

customerCtrl.addCustomerExecutiveDetailsIssue = async (req, res) => {
    try {
        req.body['customerID'] = req.user.customerID
        customerHelpExecutiveDetailsModel.create(req.body).then((que) => {
            ResponseHandler.success(req, res, DisplayMessages.createRecord, "");
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, "", err);
    }

}

customerCtrl.getCustomerExecutiveDetailsIssue = async (req, res) => {
    try {
        customerHelpExecutiveDetailsModel.aggregate([
            {
                $lookup: {
                    from: "customers",
                    localField: "customerID",
                    foreignField: "customerID",
                    as: "CustomerData"
                }
            },
            {
                $lookup: {
                    from: "customerhelps",
                    localField: "customerHelpTitleNo",
                    foreignField: "customerHelpTitle.customerHelpTitleID",
                    as: "Questions"
                }
            }
        ])
            .then((questions) => {
                ResponseHandler.success(req, res, DisplayMessages.recordGet, questions);
            })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, "", err);
    }

}

// -------------------------------------------------------------------------------------

customerCtrl.addCustomerNomineeDetailsChangeIssue = async (req, res) => {
    try {
        req.body['customerID'] = req.user.customerID
        customerHelpNomineeDetailsChangeModel.create(req.body).then((que) => {
            ResponseHandler.success(req, res, DisplayMessages.createRecord, "");
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, "", err);
    }

}

customerCtrl.getCustomerNomineeDetailsChangeIssue = async (req, res) => {
    try {
        customerHelpNomineeDetailsChangeModel.aggregate([
            {
                $lookup: {
                    from: "customers",
                    localField: "customerID",
                    foreignField: "customerID",
                    as: "CustomerData"
                }
            },
            {
                $lookup: {
                    from: "customerhelps",
                    localField: "customerHelpTitleNo",
                    foreignField: "customerHelpTitle.customerHelpTitleID",
                    as: "Questions"
                }
            }
        ])
            .then((questions) => {
                ResponseHandler.success(req, res, DisplayMessages.recordGet, questions);
            })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, "", err);
    }

}

// ---------------------------------------------------------------------------------------

customerCtrl.addCustomerCommunicationDetailsIssue = async (req, res) => {
    try {
        req.body['customerID'] = req.user.customerID
        customerHelpCommunicationDetailsChangeModel.create(req.body).then((que) => {
            ResponseHandler.success(req, res, DisplayMessages.createRecord, "");
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, "", err);
    }

}

customerCtrl.getCustomerCommunicationDetailsIssue = async (req, res) => {
    try {
        customerHelpCommunicationDetailsChangeModel.aggregate([
            {
                $lookup: {
                    from: "customers",
                    localField: "customerID",
                    foreignField: "customerID",
                    as: "CustomerData"
                }
            },
            {
                $lookup: {
                    from: "customerhelps",
                    localField: "customerHelpTitleNo",
                    foreignField: "customerHelpTitle.customerHelpTitleID",
                    as: "Questions"
                }
            }
        ])
            .then((questions) => {
                ResponseHandler.success(req, res, DisplayMessages.recordGet, questions);
            })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, "", err);
    }

}


// addCustomerBabyDetails

customerCtrl.addCustomerBabyDetails = async (req, res) => {
    try {
        req.body['customerID'] = req.user.customerID
        customerBabyDetailsModel.create(req.body).then((que) => {
            ResponseHandler.success(req, res, DisplayMessages.createRecord, "");
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, "", err);
    }
}

customerCtrl.getCustomerBabyDetails = async (req, res) => {
    try {
        customerBabyDetailsModel.aggregate([
            {
                $lookup: {
                    from: "doctorassignments",
                    localField: "DeliveryDoctorID",
                    foreignField: "doctorDetailsID",
                    as: "DoctorData"
                }
            },
            {
                $match: {
                    'customerID': req.user.customerID
                }
            }
        ])
            .then((questions) => {
                ResponseHandler.success(req, res, DisplayMessages.recordGet, questions);
            })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, "", err);
    }

}


module.exports = customerCtrl;