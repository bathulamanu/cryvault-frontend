var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const doctorDetailsSchema = new Schema({
    doctorDetailsID: {
        type: Number
    },
    doctorFirstName: {
        type: String,
        required: true
    },
    doctorLastName: {
        type: String
    },
    doctorID: {
        type: String,
        required: true
    },
    doctorProfile: {
        type: String,
        default:""
    },
    qualification: [
        { qualificationId: Number }
    ],
    specialist: [{
        specilizationID: Number
    }],
    location: {
        type: Number
    },
    DOB: {
        type: Date
    },
    IMRregisterID: {
        type: String
    },
    experience: {
        type: Number
    },
    gender: {
        type: Number
    },
    email: {
        type: String
    },
    countryCode:{
        type: String
    },
    phoneNumber: {
        type: String
    },
    doctorBio: {
        type: String
    },
    previousExperience: [{
        country: Number,
        state: Number,
        city: Number,
        specialist: [{
            specilizationID: Number
        }],
        hospitalAddress: String,
        experience: Number,
        employmentType: Number,
        startDate: Date,
        endDate: Date,
        currentlyWorking: {
            type: Boolean,
            default: false
        },
        description: String
    }],
    doctorAddress: {
        addressLine1: String,
        addressLine2: String,
        nearLandMark: String,
        country: Number,
        state: Number,
        city: Number,
        pincode: String
    },
    sociallink: {
        facebook: String,
        instagram: String,
        twitter: String,
        LinkedIn: String,
        youtube: String,
        pinterest: String
    },
    websiteLinks: [{ link: String }],
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

const doctorDetailsModel = mongoose.model('doctorDetails', doctorDetailsSchema);

module.exports = doctorDetailsModel;

