var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const customerCRNSchema = new Schema({
    CRN_Id: {
        type: Number
    },
    registrationCRNid: {
        type: String
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


customerCRNSchema.plugin(AutoIncrement, { inc_field: 'CRN_Id' });

const customerModel = mongoose.model('customerCRN', customerCRNSchema);

module.exports = customerModel;

