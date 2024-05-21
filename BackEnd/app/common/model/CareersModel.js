var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const careerSchema = new Schema({
    careerID: {
        type: Number
    },
    customerID: {
        type: Number
    },
    prefix: {
        type: String
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    countryCode: {
        type: String
    },
    phoneNumber: {
        type: String,
        required: true
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    area: {
        type: String
    },
    resume: {
        type: String
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


careerSchema.plugin(AutoIncrement, { inc_field: 'careerID' });

const careerModel = mongoose.model('career', careerSchema);

module.exports = careerModel;

