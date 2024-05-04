var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const otpSchema = new Schema({
    OTPid: {
        type: Number,
        unique: true
    },
    customerID: {
        type: Number
    },
    phoneNumber: {
        type: String
    },
    OTP: {
        type: String
    },
    resendCount: {
        type: Number,
        default: 0
    },
    blockedUntil:{
        type: Date
    },
    createdTime: {
        type: Date,
        default: Date.now
    },
   
    status: {
        type: Boolean,
        default: true
    },
    isBlockTime :{
        type: Date
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    nextResendTime:{
        type: Date
    },
    isBlock:{
        type: Boolean,
        default: false 
    }
});


otpSchema.plugin(AutoIncrement, { inc_field: 'OTPid' });

const userModel = mongoose.model('customerotp', otpSchema);

module.exports = userModel;

