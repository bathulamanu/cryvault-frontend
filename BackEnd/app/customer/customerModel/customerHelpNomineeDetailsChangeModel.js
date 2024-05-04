var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);
const { v4: uuidv4 } = require('uuid');


const Schema = mongoose.Schema;

const customerHelpNomineeDetailsChangeSchema = new Schema({
    customerHelpNomineeDetailsID: {
        type: Number
    },
    customerHelpTitleNo: {
        type: Number,
        required: true
    },
    questionId: {
        type: Number,
        required: true
    },
    customerID: {
        type: Number
    },
    NomineeOrGaurdianName: {
        type: String
    },
    relationship: {
        type: String
    },
    mobileNumber: {
        type: String
    },
    address: {
        type: String
    },
    idProof: {
        type: String
    },
    idProofNo: {
        type: String
    },
    other:{
        type: String
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


customerHelpNomineeDetailsChangeSchema.plugin(AutoIncrement, { inc_field: 'customerHelpNomineeDetailsID' });

const customerHelpNomineeDetailsChangeModel = mongoose.model('customerhelpnomineedetails', customerHelpNomineeDetailsChangeSchema);

module.exports = customerHelpNomineeDetailsChangeModel;

