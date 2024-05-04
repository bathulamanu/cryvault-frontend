var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const customerOrderCreateModel = new Schema({
    customerOrderCreate: {
        type: Number
    },
    customerID: {
        type: Number
    },
    countryCode: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    OrderCode: {
        type: String
    },
    ReceiptID:{
        type: String
    },
    Amount: {
        type: Number,
        default: null
    },
    Currency: {
        type: String,
        default: ""
    },
    receipt: {
        type: String,
        default: ""
    },
    payment_capture: {
        type: Number,
        default: null
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


customerOrderCreateModel.plugin(AutoIncrement, { inc_field: 'customerOrderCreate' });


const customerPaymentModel = mongoose.model('customerOrders', customerOrderCreateModel);

module.exports = customerPaymentModel;

