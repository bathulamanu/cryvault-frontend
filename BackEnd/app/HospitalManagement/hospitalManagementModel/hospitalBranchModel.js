var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const HospitalBranchSchema = new Schema({
    HospitalBranchID: {
        type: Number
    },
    HospitalID: {
        type: Number
    },
    HospitalBranchName: {
        type: String,
        required: true
    },
    specialist: [{ specializationID: Number }],
    LicenseNumber: {
        type: String
    },
    validity: {
        from: Date,
        to: Date
    },
    faxNumber: {
        type: String
    },
    contact: {
        phoneNumber: String,
        AlterNativePhoneNumber: String,
        landLine: String
    },
    HospitalBranchAddress: {
        addressLine1: String,
        addressLine2: String,
        nearLandMark: String,
        country: Number,
        state: Number,
        city: Number,
        pincode: String,
        latitude: String,
        longitude: String
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



HospitalBranchSchema.plugin(AutoIncrement, { inc_field: 'HospitalBranchID' });

const HospitalBranchModel = mongoose.model('HospitalBranchDetails', HospitalBranchSchema);

module.exports = HospitalBranchModel;

