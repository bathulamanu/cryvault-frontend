var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const couponSchema = new Schema({
    couponID: {
        type: Number,
        unique: true
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
    },
    updatedBy: {
        type: Number
    },
    updatedTime: {
        type: Date
    },
    createdTime: {
        type: Date,
        default: Date.now
    },
    status: {
        type: Boolean,
        default: true
    }
});


couponSchema.plugin(AutoIncrement, { inc_field: 'couponID' });

const couponModel = mongoose.model('coupon', couponSchema);

module.exports = couponModel;

