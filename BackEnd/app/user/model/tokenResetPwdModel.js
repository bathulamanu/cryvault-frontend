var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;


const tokenResetPwdSignUpSchema = new Schema({
    tokenResetPwdID: {
        type: Number
    },
    token: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
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


tokenResetPwdSignUpSchema.plugin(AutoIncrement, { inc_field: 'tokenResetPwdID' });

const tokenResetPwdModel = mongoose.model('tokenResetPwd', tokenResetPwdSignUpSchema);

module.exports = tokenResetPwdModel;

