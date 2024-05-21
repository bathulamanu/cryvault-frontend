var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const FranchiseSchema = new Schema({
    franchiseID: {
        type: Number
    },
    customerID: {
        type: Number
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    countryCode: {
        type: String
    },
    phoneNumber: {
        type: String,
        required: true
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    OfficeSpace: {
        type: Boolean
    },
    professionalExperience: {
        type: String
    },
    ExperienceInStemCellBanking: {
        type: Boolean
    },
    comment: {
        type: String
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


FranchiseSchema.plugin(AutoIncrement, { inc_field: 'franchiseID' });

const FranchiseModel = mongoose.model('franchise', FranchiseSchema);

module.exports = FranchiseModel;

