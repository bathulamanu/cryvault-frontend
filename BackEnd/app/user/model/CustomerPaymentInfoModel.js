var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const customerPaymentInfoModel = new Schema({
    customerPaymentId: {
        type: Number
    },
    customerID: {
        type: Number
    },
    subscriptionPlanId: {
        type: Number,
        default: null
    },
    paymentType: {
        type: String,
        default: ""
    },
    paymentStatus: {
        type: String,
        default: ""
    },
    totalPaidAmount: {
        type: String,
        default: ""
    },
    totalPendingAmount: {
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
    GST: {
        type: String,
        default: ""
    },
    excludeGSTtotalAmount: {
        type: String,
        default: ""
    },
    coupon: {
        couponID: {
            type: Number,
            default: null
        },
        couponCode: {
            type: String,
            default: ""
        },
        discountType: {
            type: String,
            default: ""
        },
        discountValue: {
            type: String,
            default: ""
        },
        couponPercentage: {
            type: String,
            default: ""
        }
    },
    GUID: {
        type: String,
        default: ""
    },
    OrderCode: {
        type: String,
        default: ""
    },
    Percentage: {
        type: Number,
        default: null
    },
    SelfProfit: {
        type: Number,
        default: null
    },
    AppProfit: {
        type: Number,
        default: null
    },
    PaymentGatewayID: {
        type: String,
        default: ""
    },
    Method: {
        type: String,
        default: ""
    },
    Event: {
        type: String,
        default: ""
    },
    Card: {
        CardID: {
            type: String,
            default: ""
        },
        CardType: {
            type: String,
            default: ""
        },
        CardIssuer: {
            type: String,
            default: ""
        },
        CardLast4Digits: {
            type: String,
            default: ""
        },
        CardNetwork: {
            type: String,
            default: ""
        }
    },
    razorpaySignature: {
        type: String
    },
    CRNno: {
        type: String
    },
    invoiceFile: {
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


customerPaymentInfoModel.plugin(AutoIncrement, { inc_field: 'customerPaymentId' });

const customerPaymentModel = mongoose.model('customerPaymentInfo', customerPaymentInfoModel);

module.exports = customerPaymentModel;

