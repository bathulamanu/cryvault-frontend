var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const doctorDetailsSchema = new Schema({
    doctorDetailsID: {
        type: Number
    },
    id: {
        type: Number
    },
    doctorName: {
        type: String,
        required: true
    },
    doctorProfile: {
        type: String
    },
    qualification: [
        { qualificationId: Number }
    ],
    specialist: [{
        specilizationID: Number
    }],
    DOB: {
        type: Date
    },
    IMR_Register_ID: {
        type: String
    },
    Blog: {
        type: String
    },
    Experience: {
        type: String
    },
    Employ_Id: {
        type: String
    },
    Gender: {
        type: Number
    },
    Email: {
        type: String
    },
    Doctor_Bio: {
        type: String
    },
    Previous_Experience: {
        type: String
    },
    Doctor_Address: {
        addressLine1: String,
        addressLine2: String,
        nearLandMark: String,
        country: String,
        state: String,
        city: String,
        pincode: String
    },
    contact: {
        phoneNumber: String,
        alterNativePhoneNumber: String,
        landLine: String,
        emergencyNumber: String
    },
    updatedBy: {
        type: Number
    },
    updatedTime: {
        type: Date
    },
    createdTime: {
        type: Date,
        default: Date.now
    },
    status: {
        type: Boolean,
        default: true
    }
});


doctorDetailsSchema.plugin(AutoIncrement, { inc_field: 'doctorDetailsID' });
doctorDetailsSchema.plugin(AutoIncrement, { inc_field: 'id' });


const doctorDetailsModel = mongoose.model('doctorDetails', doctorDetailsSchema);

module.exports = doctorDetailsModel;

