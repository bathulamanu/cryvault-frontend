var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);
const { v4: uuidv4 } = require('uuid');


const Schema = mongoose.Schema;

const customerHelpMobileNumberChangeModelSchema = new Schema({
    customerHelpMobileNumberChangeID: {
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
    ExistedPhoneNumber: {
        type: String
    },
    NewPhoneNumber: {
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


customerHelpMobileNumberChangeModelSchema.plugin(AutoIncrement, { inc_field: 'customerHelpMobileNumberChangeID' });

const customerHelpMobileNumberChangeModel = mongoose.model('customerhelpmobilenumber', customerHelpMobileNumberChangeModelSchema);

module.exports = customerHelpMobileNumberChangeModel;

