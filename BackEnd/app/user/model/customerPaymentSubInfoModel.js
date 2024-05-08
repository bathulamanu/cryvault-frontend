var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const customerPaymentSubInfoModel = new Schema({
    customerPaymentSubId: {
        type: Number
    },
    customerID: {
        type: Number
    },
    customerPaymentId: {
        type: Number
    },
    subscriptionPlanId: {
        type: Number,
        default: null
    },
    paymentStatus: {
        type: String,
        default: ""
    },
    paidAmount: {
        type: String,
        default: ""
    },
    pendingAmount: {
        type: String,
        default: ""
    },
    paymentDate: {
        type: Date,
        default: ""
    },
    totalAmount: {
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


customerPaymentSubInfoModel.plugin(AutoIncrement, { inc_field: 'customerPaymentSubId' });

const customerPaymentSubModel = mongoose.model('customerPaymentSubInfo', customerPaymentSubInfoModel);

module.exports = customerPaymentSubModel;

