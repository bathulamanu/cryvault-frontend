var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);
const { v4: uuidv4 } = require('uuid');


const Schema = mongoose.Schema;

const customerHelpHospitalDetailsChangeSchema = new Schema({
    customerHelpHospitalDetailsChangeID: {
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
    presentHospoital: {
        type: String
    },
    NewHospital: {
        type: String
    },
    locationOrBranch: {
        type: String
    },
    reason: {
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


customerHelpHospitalDetailsChangeSchema.plugin(AutoIncrement, { inc_field: 'customerHelpHospitalDetailsChangeID' });

const customerHelpHospitalDetailsChangeModel = mongoose.model('customerhelphospitaldetails', customerHelpHospitalDetailsChangeSchema);

module.exports = customerHelpHospitalDetailsChangeModel;

