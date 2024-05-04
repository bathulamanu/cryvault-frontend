var ResponseHandler = require("../../config/ResponseHandler");
var DisplayMessages = require("../../utils/messages");


var rolesModel = require('./hospitalManagementModel/rolesModel');
var countryModel = require('./hospitalManagementModel/countryModel');
var stateModel = require('./hospitalManagementModel/stateModel');
var cityModel = require('./hospitalManagementModel/cityModel');
var employeeModel = require('./hospitalManagementModel/employeeModel');
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



hospitalManagementCtrl.addEmployee = async (req, res) => {
    try {
        employeeModel.create(req.body).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.addingEmployee, "")
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}

hospitalManagementCtrl.getEmployee = async (req, res) => {
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


hospitalManagementCtrl.UpdateEmployee = async (req, res) => {
    try {
        if (!req.params.employeeAutoGeneratedID) {
            ResponseHandler.error(req, res, DisplayMessages.EmployeeIDRequired, "");
            return;
        }
        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        employeeModel.updateOne({ employeeAutoGeneratedID: req.params.employeeAutoGeneratedID }, { $set: req.body }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.updatingEmployee, response)
        })
            .catch((err) => {
                ResponseHandler.error(req, res, "", err);
            })
    }
    catch (err) {
        ResponseHandler.error(req, res, '', err)
    }
}


hospitalManagementCtrl.deleteEmployee = async (req, res) => {
    try {
        if (!req.params.employeeAutoGeneratedID) {
            ResponseHandler.error(req, res, DisplayMessages.EmployeeIDRequired, "");
            return;
        }
        req.body['updatedTime'] = new Date().toISOString();
        req.body['updatedBy'] = 1;
        req.body['status'] = false;
        employeeModel.updateOne({ employeeAutoGeneratedID: req.params.employeeAutoGeneratedID }, { $set: req.body }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.deleteEmployee, response)
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
        DoctorDetailsModel.find({ status: true }).then((response) => {
            ResponseHandler.success(req, res, DisplayMessages.getDoctorDetails, response)
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