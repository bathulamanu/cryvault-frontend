var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;


const customerAnnexureInformationModel = new Schema({
    customerAnnexureInformationId: {
        type: Number
    },
    customerID: {
        type: Number,
        unique: true
    },
    CustomerClientDetails: {
        ExpectantMotherName: {
            type: String,
            default: ""
        },
        ExpectantMotherDOB: {
            type: Date,
            default: ""
        },
        ExpectantMotherMobile: {
            type: String,
            default: ""
        },
        ExpectantMotherEmail: {
            type: String,
            default: ""
        },
        ExpectantMotherOccupation: {
            type: String,
            default: ""
        },
        ExpectantMotherDesignation: {
            type: String,
            default: ""
        },
        ExpectantMotherOrganizationName: {
            type: String,
            default: ""
        },
        ExpectantMotherIDproof: {
            type: String,
            default: ""
        },
        ExpectantMotherIDproofPhoto: {
            type: String,
            default: ""
        },
        ExpectantMotherProfilePhoto: {
            type: String,
            default: ""
        },
        ExpectantMotherIdproofNo: {
            type: String,
            default: ""
        },
        ExpectantMotherOtherInfo: {
            type: String,
            default: ""
        },
        ExpectantFatherName: {
            type: String,
            default: ""
        },
        ExpectantFatherDOB: {
            type: Date,
            default: ""
        },
        ExpectantFatherMobile: {
            type: String,
            default: ""
        },
        ExpectantFatherEmail: {
            type: String,
            default: ""
        },
        ExpectantFatherOccupation: {
            type: String,
            default: ""
        },
        ExpectantFatherDesignation: {
            type: String,
            default: ""
        },
        ExpectantFatherOrganizationName: {
            type: String,
            default: ""
        },
        ExpectantFatherIDproof: {
            type: String,
            default: ""
        },
        ExpectantFatherIDproofPhoto: {
            type: String,
            default: ""
        },
        ExpectantFatherProfilePhoto: {
            type: String,
            default: ""
        },
        ExpectantFatherIdproofNo: {
            type: String,
            default: ""
        },
        ExpectantFatherOtherInfo: {
            type: String,
            default: ""
        }
    },
    CustomerCommunicationDetails: {
        Address: {
            type: String,
            default: ""
        },
        City: {
            type: String,
            default: ""
        },
        State: {
            type: String,
            default: ""
        },
        Country: {
            type: String,
            default: ""
        },
        PinCode: {
            type: String,
            default: ""
        },
        permanentAddressIsSameAsCorrespondenceAddress: {
            type: Boolean,
            default: false
        },
        PermanentAddress: {
            type: String,
            default: ""
        },
        PermanentAddressCity: {
            type: String,
            default: ""
        },
        PermanentAddressState: {
            type: String,
            default: ""
        },
        PermanentAddressCountry: {
            type: String,
            default: ""
        },
        PermanentAddressPinCode: {
            type: String,
            default: ""
        }

    },
    CustomerHospitalBirthingdetails: {
        ExpectedDateOfDelivery: {
            type: String,
            default: ""
        },
        TypeOfpregnancy: {
            type: String,
            default: ""
        },
        HowManyChildrensDoYouHaveAlready: {
            type: String,
            default: ""
        },
        ConsultingGynocologist: {
            type: String,
            default: ""
        },
        ConsultingHospital: {
            type: String,
            default: ""
        },
        ConsultingHospitalAddress: {
            type: String,
            default: ""
        },
        ConsultingHosptalCity: {
            type: String,
            default: ""
        },
        ConsultingHospitalState: {
            type: String,
            default: ""
        },
        ConsultingHospitalCountry: {
            type: String,
            default: ""
        },
        ConsultingHospitalPinCode: {
            type: String,
            default: ""
        },
        ConsultingHospitalTelephone: {
            type: String,
            default: ""
        },
        ConsultingHospitalMobile: {
            type: String,
            default: ""
        },
        IsDeliveringHospitalSameAsConsultingHospotal: {
            type: Boolean,
            default: false
        },

        DeliveringHospitalAddress: {
            type: String,
            default: ""
        },
        DeliveringHosptalCity: {
            type: String,
            default: ""
        },
        DeliveringHospitalState: {
            type: String,
            default: ""
        },
        DeliveringHospitalCountry: {
            type: String,
            default: ""
        },
        DeliveringHospitalPinCode: {
            type: String,
            default: ""
        },
        DeliveringHospitalTelephone: {
            type: String,
            default: ""
        },
        DeliveringHospitalMobile: {
            type: String,
            default: ""
        }
    },
    CustomerShipmentDetails: {
        type: String,
        default: ""
    },
    createdTime: {
        type: Date,
        default: Date.now
    },
    updatedTime: {
        type: Date,
        default: ""
    },
    status: {
        type: Boolean,
        default: true
    }
});


customerAnnexureInformationModel.plugin(AutoIncrement, { inc_field: 'customerAnnexureInformationId' });

const customerAnnexureModel = mongoose.model('customerAnnexureInformation', customerAnnexureInformationModel);

module.exports = customerAnnexureModel;

