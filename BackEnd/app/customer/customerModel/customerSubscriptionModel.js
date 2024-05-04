var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const customerSubscription = new Schema({
    subscriptionID: {
        type: Number
    },
    title: {
        type: String,
        default: ""
    },
    subTitle: {
        type: String,
        default: ""
    },
    price: {
        type: String
    },
    offerPrice: {
        type: String
    },
    EMI: {
        type: String,
        default: ""
    },
    EMItext: {
        type: String,
        default: ""
    },
    Icon: {
        type: String,
        default: ""
    },
    currencySymbol: {
        type: String,
        default: ""
    },
    ribben: {
        type: String,
        default: ""
    },
    ribbenStatus: {
        type: String,
        default: ""
    },
    btnText: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    },
    additionalInfo: {
        type: String,
        default: ""
    },
    durationYear: {
        type: String,
        default: ""
    },
    durationYearText: {
        type: String,
        default: ""
    },
    customText: {
        type: String,
        default: ""
    },
    color: {
        type: String,
        default: ""
    },
    createdTime: {
        type: Date,
        default: Date.now
    },
    updatedBy: {
        type: Number
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


customerSubscription.plugin(AutoIncrement, { inc_field: 'subscriptionID' });

const subscriptionModel = mongoose.model('customerSubscriptionPlan', customerSubscription);

module.exports = subscriptionModel;

