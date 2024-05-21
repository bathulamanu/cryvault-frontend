var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const HospitalSchema = new Schema({
    HospitalID: {
        type: Number
    },
    hospitalName: {
        type: String,
        required: true
    },
    hospitalLogo: {
        type: String
    },
    about: { type: String },
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
    email: {
        type: String
    },
    website: {
        type: String
    },
    contact: {
        countryCode:String,
        phoneNumber: String,
        AlterNativePhoneNumber: String,
        landLine: String
    },
    sociallink: {
        facebook: String,
        instagram: String,
        twitter: String,
        LinkedIn: String,
        youtube: String,
        pinterest: String,
        googleMap: String,
        otherLink:String
    },
    HospitalAddress: {
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

// async function updateFieldIds(next) {
//     const doc = this;
//     if (!doc.isNew) {
//         return next();
//     }

//     let counter = 1; // Initial value for auto-increment
//     // let count = 1
//     // Loop through each item in the array and assign auto-incremented IDs
//     doc.Branches.forEach(item => {
//         item.BranchID = counter++;
//     });

//     next();
// }

// HospitalSchema.pre('save', updateFieldIds);


HospitalSchema.plugin(AutoIncrement, { inc_field: 'HospitalID' });

// HospitalSchema.plugin(AutoIncrement, { inc_field: 'Branches.BranchID' });


const HospitalModel = mongoose.model('HospitalDetails', HospitalSchema);

module.exports = HospitalModel;

