var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);
const { v4: uuidv4 } = require('uuid');


const Schema = mongoose.Schema;

const customerHelpCommunicationDetailsChangeSchema = new Schema({
    customerHelpCommunicationDetailsChangeID: {
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
    addressLine1: {
        type: String
    },
    addressLine2: {
        type: String
    },
    nearlandMark: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    pincode: {
        type: String
    },
    country: {
        type: String
    },
    ifPermanentAddressIsSameAsCorrespondence: {
        type: Boolean
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


customerHelpCommunicationDetailsChangeSchema.plugin(AutoIncrement, { inc_field: 'customerHelpCommunicationDetailsChangeID' });

const customerHelpCommunicationDetailsChangeModel = mongoose.model('customerhelpcommunicationdetails', customerHelpCommunicationDetailsChangeSchema);

module.exports = customerHelpCommunicationDetailsChangeModel;

