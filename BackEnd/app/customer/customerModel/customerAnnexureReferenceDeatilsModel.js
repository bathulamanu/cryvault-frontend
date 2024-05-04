var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const customerReferalInfo = new Schema({
    customerReferalId: {
        type: Number
    },
    customerID: {
        type: Number
    },
    customerOrEmployee: {
        type: String,
        default: ""
    },
    customerOrEmployeeID: {
        type: Number,
        default: ""
    },
    Email: {
        type: String,
        default: ""
    },
    phoneNumber: {
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

customerReferalInfo.plugin(AutoIncrement, { inc_field: 'customerReferalId' });

const customerReferalModel = mongoose.model('referalcustomer', customerReferalInfo);

module.exports = customerReferalModel;

