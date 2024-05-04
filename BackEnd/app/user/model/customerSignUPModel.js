var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;


const customerSignUpSchema = new Schema({
    customerID: {
        type: Number
    },
    countryCode: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        unique: true,
        required: true
    },
    firstName: {
        type: String,
        default: ""
    },
    lastName: {
        type: String,
        default: ""
    },
    email: {
        type: String,
        default: ""
    },
    addressLine1: {
        type: String,
        default: ""
    },
    addressLine2: {
        type: String,
        default: ""
    },
    nearLandMark: {
        type: String,
        default: ""
    },
    city: {
        type: String,
        default: ""
    },
    state: {
        type: String,
        default: ""
    },
    pincode: {
        type: String,
        default: ""
    },
    country: {
        type: String,
        default: ""
    },
    gender: {
        type: Number,
        default: null
    },
    profilePhoto: {
        type: String,
        default: ""
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


customerSignUpSchema.plugin(AutoIncrement, { inc_field: 'customerID' });

const customerModel = mongoose.model('customer', customerSignUpSchema);

module.exports = customerModel;

