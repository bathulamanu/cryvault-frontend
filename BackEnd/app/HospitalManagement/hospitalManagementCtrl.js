var ResponseHandler = require("../../config/ResponseHandler");
var DisplayMessages = require("../../utils/messages");


var rolesModel = require('./hospitalManagementModel/rolesModel');
var countryModel = require('./hospitalManagementModel/countryModel');
var stateModel = require('./hospitalManagementModel/stateModel');
var cityModel = require('./hospitalManagementModel/cityModel');
var doctorSpecializationsListModel = require('./hospitalManagementModel/doctorSpecializationsListModel');
var HospitalDetailsModel = require('./hospitalManagementModel/hospitalModel');
var hospitalBranchModel = require('./hospitalManagementModel/hospitalBranchModel');
var DoctorDetailsModel = require('./hospitalManagementModel/doctorDetailsModel');
var doctorQualificationModel = require('./hospitalManagementModel/doctorQualificationModel');
var DoctorAssignmentModel = require('./hospitalManagementModel/doctorAssignmentModel');

let hospitalManagementCtrl = {};



hospitalManagementCtrl.getCountryName = async (req, res) => {
    try {
        countryModel.find({}).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.getEmailContent, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

hospitalManagementCtrl.getStateName = async (req, res) => {
    try {
        stateModel.find({ countryID: req.params.countryID }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.getEmailContent, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

hospitalManagementCtrl.getCityName = async (req, res) => {
    try {
        cityModel.find({ stateID: req.params.stateID }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.getEmailContent, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}


hospitalManagementCtrl.addRole = async (req, res) => {
    try {
        rolesModel.create(req.body).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.addingRole, "")
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

hospitalManagementCtrl.getRole = async (req, res) => {
    try {
        rolesModel.find({ status: true }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.getRole, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}


hospitalManagementCtrl.UpdateRole = async (req, res) => {
    try {
        if (!req.params.roleID) {
            ResponseHandler.error(req, res, DisplayMessages.RoleIDRequired, "");
            return;
        }
        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        rolesModel.updateOne({ roleID: req.params.roleID }, { $set: req.body }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.updatingRole, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}


hospitalManagementCtrl.deleteRole = async (req, res) => {
    try {
        if (!req.params.roleID) {
            ResponseHandler.error(req, res, DisplayMessages.RoleIDRequired, "");
            return;
        }
        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        req.body['status'] = false;
        rolesModel.updateOne({ roleID: req.params.roleID }, { $set: req.body }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.deleteRole, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

// --------------------------------------------------------------------------------------------------




// ----------------------------------------------------------------------------

hospitalManagementCtrl.addDoctorSpecialization = async (req, res) => {
    try {
        doctorSpecializationsListModel.create(req.body).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.addingDoctorSpecialization, "")
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

hospitalManagementCtrl.getDoctorSpecialization = async (req, res) => {
    try {
        doctorSpecializationsListModel.find({ status: true }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.getDoctorSpecialization, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

hospitalManagementCtrl.UpdateDoctorSpecialization = async (req, res) => {
    try {
        if (!req.params.specializationID) {
            ResponseHandler.error(req, res, DisplayMessages.DoctorSpecializationIDRequired, "");
            return;
        }
        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        doctorSpecializationsListModel.updateOne({ specializationID: req.params.specializationID }, { $set: req.body }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.updatingDoctorSpecialization, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

hospitalManagementCtrl.deleteDoctorSpecialization = async (req, res) => {
    try {
        if (!req.params.specializationID) {
            ResponseHandler.error(req, res, DisplayMessages.DoctorSpecializationIDRequired, "");
            return;
        }
        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        req.body['status'] = false;
        doctorSpecializationsListModel.updateOne({ specializationID: req.params.specializationID }, { $set: req.body }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.deleteDoctorSpecialization, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

// -----------------------------------------------------------------

hospitalManagementCtrl.addDoctorQualification = async (req, res) => {
    try {
        doctorQualificationModel.create(req.body).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.addingDoctorQualification, "")
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

hospitalManagementCtrl.getDoctorQualification = async (req, res) => {
    try {
        doctorQualificationModel.find({ status: true }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.getDoctorQualification, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

hospitalManagementCtrl.UpdateDoctorQualification = async (req, res) => {
    try {
        if (!req.params.DoctorQualificationID) {
            ResponseHandler.error(req, res, DisplayMessages.DoctorQualificationIDRequired, "");
            return;
        }
        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        doctorQualificationModel.updateOne({ DoctorQualificationID: req.params.DoctorQualificationID }, { $set: req.body }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.updatingDoctorQualification, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

hospitalManagementCtrl.deleteDoctorQualification = async (req, res) => {
    try {
        if (!req.params.DoctorQualificationID) {
            ResponseHandler.error(req, res, DisplayMessages.DoctorQualificationIDRequired, "");
            return;
        }
        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        req.body['status'] = false;
        doctorQualificationModel.updateOne({ DoctorQualificationID: req.params.DoctorQualificationID }, { $set: req.body }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.deleteDoctorQualification, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

// ---------------------------------------------------------------------------------



hospitalManagementCtrl.addHospitalDetails = async (req, res) => {
    try {
        HospitalDetailsModel.create(req.body).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.addingHospitalDetails, "")
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

hospitalManagementCtrl.getHospitalDetails = async (req, res) => {
    try {
        HospitalDetailsModel.find({ status: true }).then((response) => {
            response.forEach(x => {
                x._doc['id'] = x._doc.HospitalID
            })
            ResponseHandler.success(req, res, DisplayMessages.getHospitalDetails, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

hospitalManagementCtrl.UpdateHospitalDetails = async (req, res) => {
    try {
        if (!req.params.HospitalID) {
            ResponseHandler.error(req, res, DisplayMessages.HospitalDetailsIDRequired, "");
            return;
        }
        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        HospitalDetailsModel.updateOne({ HospitalID: req.params.HospitalID }, { $set: req.body }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.updatingHospitalDetails, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

hospitalManagementCtrl.deleteHospitalDetails = async (req, res) => {
    try {
        if (!req.params.HospitalID) {
            ResponseHandler.error(req, res, DisplayMessages.HospitalDetailsIDRequired, "");
            return;
        }
        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        req.body['status'] = false;
        HospitalDetailsModel.updateOne({ HospitalID: req.params.HospitalID }, { $set: req.body }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.deleteHospitalDetails, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

// =================================================================================


hospitalManagementCtrl.addHospitalBranchDetails = async (req, res) => {
    try {
        hospitalBranchModel.create(req.body).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.addingHospitalBranch, "")
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

hospitalManagementCtrl.getHospitalBranchDetails = async (req, res) => {
    try {
        hospitalBranchModel.find({ status: true }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.getHospitalBranch, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

hospitalManagementCtrl.UpdateHospitalBranchDetails = async (req, res) => {
    try {
        if (!req.params.HospitalBranchID) {
            ResponseHandler.error(req, res, DisplayMessages.HospitalBranchIDRequired, "");
            return;
        }
        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        hospitalBranchModel.updateOne({ HospitalBranchID: req.params.HospitalBranchID }, { $set: req.body }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.updatingHospitalBranch, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

hospitalManagementCtrl.deleteHospitalBranchDetails = async (req, res) => {
    try {
        if (!req.params.HospitalBranchID) {
            ResponseHandler.error(req, res, DisplayMessages.HospitalBranchIDRequired, "");
            return;
        }
        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        req.body['status'] = false;
        hospitalBranchModel.updateOne({ HospitalBranchID: req.params.HospitalBranchID }, { $set: req.body }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.deleteHospitalBranch, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

// ----------------------------------------------------------------------------



hospitalManagementCtrl.addDoctorDetails = async (req, res) => {
    try {
        DoctorDetailsModel.create(req.body).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.addingDoctorDetails, "")
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

hospitalManagementCtrl.getDoctorDetails = async (req, res) => {
    try {
        DoctorDetailsModel.aggregate([
            {
                $lookup: {
                    from: "cities",
                    localField: "location",
                    foreignField: "cityID",
                    as: "cityDetails"
                }
            },
            {
                $lookup: {
                    from: "masterconfigurations",
                    localField: "experience",
                    foreignField: "masterConfigurationID",
                    as: "ExperienceDetails"
                }
            },
            {
                $lookup: {
                    from: "masterconfigurations",
                    localField: "specialist.specilizationID",
                    foreignField: "masterConfigurationID",
                    as: "specilizationDetails"
                }
            }
        ]).then((response) => {
            var allDoctorDeatails = [];

            response.forEach(x => {
                let obj = {};
                obj['doctorFirstName'] = x.doctorFirstName;
                obj['doctorLastName'] = x.doctorLastName;
                obj['doctorID'] = x.doctorID;
                obj['doctorProfile'] = x.doctorProfile;
                obj['IMRregisterID'] = x.IMRregisterID;
                obj['countryCode'] = x.countryCode;
                obj['phoneNumber'] = x.phoneNumber;
                obj['status'] = x.status;
                obj['doctorDetailsID'] = x.doctorDetailsID;
                obj['specilizationInfo'] = [];
                obj['id'] = x.doctorDetailsID;
                obj['cityInfo'] = {
                    cityID: x.cityDetails[0].cityID,
                    name: x.cityDetails[0].name
                }
                obj['experienceInfo'] = {
                    experienceID: x.ExperienceDetails[0].masterConfigurationID,
                    value: x.ExperienceDetails[0].value
                }
                x.specilizationDetails.forEach(y => {
                    obj['specilizationInfo'].push({
                        specilizationID: y.masterConfigurationID,
                        value: y.value
                    })
                })
                allDoctorDeatails.push(obj)

            })
            ResponseHandler.success(req, res, DisplayMessages.getDoctorDetails, allDoctorDeatails)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

async function getDoctorPreviousExperienceDetails(doctorDetailsID) {
    try {
        return new Promise(async (resolve, reject) => {
            DoctorDetailsModel.aggregate([
                {
                    $match: {
                        doctorDetailsID: Number(doctorDetailsID)
                    }
                },
                {
                    $lookup: {
                        from: "cities",
                        localField: "previousExperience.city",
                        foreignField: "cityID",
                        as: "previouscityDetails"
                    }
                },
                {
                    $lookup: {
                        from: "masterconfigurations",
                        localField: "previousExperience.experience",
                        foreignField: "masterConfigurationID",
                        as: "previousExperienceDetails"
                    }
                },
                {
                    $lookup: {
                        from: "masterconfigurations",
                        localField: "previousExperience.employmentType",
                        foreignField: "masterConfigurationID",
                        as: "previousEmploymentTypeDetails"
                    }
                },
                {
                    $lookup: {
                        from: "masterconfigurations",
                        localField: "previousExperience.specialist.specilizationID",
                        foreignField: "masterConfigurationID",
                        as: "previousSpecilizationDetails"
                    }
                }
            ]).then(async (response) => {
                if (response && response.length != 0) {
                    let sur = response[0];
                    var somearr = [];
                    if (sur.previousExperience && sur.previousExperience.length != 0) {
                        sur.previousExperience.forEach(xx => {
                            let eachObj = {}
                            eachObj['specilizationInfo'] = [];
                            eachObj['hospitalAddress'] = xx.hospitalAddress
                            eachObj['startDate'] = xx.startDate
                            eachObj['endDate'] = xx.endDate
                            eachObj['currentlyWorking'] = xx.currentlyWorking
                            eachObj['description'] = xx.description
                            eachObj['_id'] = xx._id
                            eachObj['LocationInfo'] = {
                                cityID: sur.previouscityDetails[0].cityID,
                                cityName: sur.previouscityDetails[0].name,
                                stateID: sur.previouscityDetails[0].stateID,
                                stateName: sur.previouscityDetails[0].stateName,
                                countryID: sur.previouscityDetails[0].countryID,
                                countryName: sur.previouscityDetails[0].countryName
                            }
                            eachObj['experienceInfo'] = {
                                experienceID: sur.previousExperienceDetails[0].masterConfigurationID,
                                value: sur.previousExperienceDetails[0].value
                            }
                            eachObj['employmentTypeInfo'] = {
                                employmentTypeID: sur.previousEmploymentTypeDetails[0].masterConfigurationID,
                                value: sur.previousEmploymentTypeDetails[0].description
                            }
                            sur.previousSpecilizationDetails.forEach(y => {
                                eachObj['specilizationInfo'].push({
                                    specilizationID: y.masterConfigurationID,
                                    value: y.value
                                })
                            })

                            somearr.push(eachObj)
                        })
                    }
                    resolve(somearr);
                }
            })
                .catch((err) => {
                    ResponseHandler.error(req, res, "", err);
                })

        })

    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}


hospitalManagementCtrl.getEachDoctorDetails = async (req, res) => {
    try {
        DoctorDetailsModel.aggregate([
            {
                $match: {
                    doctorDetailsID: Number(req.params.doctorDetailsID)
                }
            },
            {
                $lookup: {
                    from: "cities",
                    localField: "location",
                    foreignField: "cityID",
                    as: "cityDetails"
                }
            },
            {
                $lookup: {
                    from: "masterconfigurations",
                    localField: "experience",
                    foreignField: "masterConfigurationID",
                    as: "ExperienceDetails"
                }
            },
            {
                $lookup: {
                    from: "masterconfigurations",
                    localField: "gender",
                    foreignField: "masterConfigurationID",
                    as: "genderDetails"
                }
            },
            {
                $lookup: {
                    from: "masterconfigurations",
                    localField: "qualification.qualificationId",
                    foreignField: "masterConfigurationID",
                    as: "qualificationDetails"
                }
            },
            {
                $lookup: {
                    from: "masterconfigurations",
                    localField: "specialist.specilizationID",
                    foreignField: "masterConfigurationID",
                    as: "specilizationDetails"
                }
            }
        ]).then(async (response) => {
            if (response && response.length != 0) {
                var doc = response[0];

                let obj = {};

                obj['doctorFirstName'] = doc.doctorFirstName;
                obj['doctorLastName'] = doc.doctorLastName;
                obj['doctorID'] = doc.doctorID;
                obj['doctorProfile'] = doc.doctorProfile;
                obj['DOB'] = doc.DOB;
                obj['IMRregisterID'] = doc.IMRregisterID;
                obj['email'] = doc.email;
                obj['countryCode'] = doc.countryCode;
                obj['phoneNumber'] = doc.phoneNumber;
                obj['doctorBio'] = doc.doctorBio;
                // obj['previousExperience'] = doc.previousExperience;
                obj['websiteLinks'] = doc.websiteLinks;
                obj['status'] = doc.status;
                obj['doctorDetailsID'] = doc.doctorDetailsID;
                obj['sociallink'] = doc.sociallink
                obj['specilizationInfo'] = [];
                obj['qualificationInfo'] = []
                obj['id'] = doc.doctorDetailsID;
                obj['cityInfo'] = {
                    cityID: doc.cityDetails[0].cityID,
                    name: doc.cityDetails[0].name
                }
                obj['experienceInfo'] = {
                    experienceID: doc.ExperienceDetails[0].masterConfigurationID,
                    value: doc.ExperienceDetails[0].value
                }
                obj['genderInfo'] = {
                    genderID: doc.genderDetails[0].masterConfigurationID,
                    value: doc.genderDetails[0].value
                }
                doc.specilizationDetails.forEach(y => {
                    obj['specilizationInfo'].push({
                        specilizationID: y.masterConfigurationID,
                        value: y.value
                    })
                })
                doc.qualificationDetails.forEach(y => {
                    obj['qualificationInfo'].push({
                        qualificationID: y.masterConfigurationID,
                        value: y.value
                    })
                })
                obj['previousExperience'] = await getDoctorPreviousExperienceDetails(req.params.doctorDetailsID)
                ResponseHandler.success(req, res, DisplayMessages.getDoctorDetails, obj);
            }
            else {
                ResponseHandler.error(req, res, "User Not Found", "");
            }
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

hospitalManagementCtrl.UpdateDoctorDetails = async (req, res) => {
    try {
        if (!req.params.doctorDetailsID) {
            ResponseHandler.error(req, res, DisplayMessages.DoctorDetailsIDRequired, "");
            return;
        }
        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        DoctorDetailsModel.updateOne({ doctorDetailsID: req.params.doctorDetailsID }, { $set: req.body }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.updatingDoctorDetails, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

hospitalManagementCtrl.deleteDoctorDetails = async (req, res) => {
    try {
        if (!req.params.doctorDetailsID) {
            ResponseHandler.error(req, res, DisplayMessages.DoctorDetailsIDRequired, "");
            return;
        }
        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        req.body['status'] = false;
        DoctorDetailsModel.updateOne({ doctorDetailsID: req.params.doctorDetailsID }, { $set: req.body }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.deleteDoctorDetails, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

// -----------------------------------------------------------------------------------

hospitalManagementCtrl.addDoctorAssignment = async (req, res) => {
    try {
        DoctorAssignmentModel.create(req.body).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.addingDoctorAssignment, "")
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

hospitalManagementCtrl.getDoctorAssignment = async (req, res) => {
    try {

        DoctorAssignmentModel.aggregate([
            {
                $lookup: {
                    from: "hospitaldetails",
                    localField: "hospitalID",
                    foreignField: "HospitalID",
                    as: "hospitalDetails"
                }
            },
            {
                $lookup: {
                    from: "hospitalbranchdetails",
                    localField: "branchID",
                    foreignField: "HospitalBranchID",
                    as: "hospitalBranchDetails"
                }
            },
            {
                $lookup: {
                    from: "doctordetails",
                    localField: "doctorDetailsID",
                    foreignField: "doctorDetailsID",
                    as: "doctorDetails"
                }
            }
        ]).then((assign) => {
            ResponseHandler.success(req, res, DisplayMessages.DataFound, assign)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

hospitalManagementCtrl.UpdateDoctorAssignment = async (req, res) => {
    try {
        if (!req.params.doctorAssignmentID) {
            ResponseHandler.error(req, res, DisplayMessages.DoctorAssignmentIDRequired, "");
            return;
        }
        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        DoctorAssignmentModel.updateOne({ doctorAssignmentID: req.params.doctorAssignmentID }, { $set: req.body }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.updatingDoctorAssignment, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

hospitalManagementCtrl.deleteDoctorAssignment = async (req, res) => {
    try {
        if (!req.params.doctorAssignmentID) {
            ResponseHandler.error(req, res, DisplayMessages.DoctorAssignmentIDRequired, "");
            return;
        }
        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        req.body['status'] = false;
        DoctorAssignmentModel.updateOne({ doctorAssignmentID: req.params.doctorAssignmentID }, { $set: req.body }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.deleteDoctorAssignment, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

module.exports = hospitalManagementCtrl;