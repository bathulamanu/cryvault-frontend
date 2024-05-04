var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);
const { v4: uuidv4 } = require('uuid');


const Schema = mongoose.Schema;

const customerHelpExecutiveDetailsSchema = new Schema({
    customerHelpExecutiveDetailsID: {
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
    areaName: {
        type: String
    },
    pincode: {
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


customerHelpExecutiveDetailsSchema.plugin(AutoIncrement, { inc_field: 'customerHelpExecutiveDetailsID' });

const customerHelpExecutiveDetailsSchemaModel = mongoose.model('customerhelpexecutivedetails', customerHelpExecutiveDetailsSchema);

module.exports = customerHelpExecutiveDetailsSchemaModel;

