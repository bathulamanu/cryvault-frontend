// Request for Information Kit

var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const InformationKitRequestSchema = new Schema({
    informationKitRequestID: {
        type: Number
    },
    customerID: {
        type: Number
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
    phoneNumber: {
        type: String,
        required: true
    },
    location: {
        type: String
    },
    address: {
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


InformationKitRequestSchema.plugin(AutoIncrement, { inc_field: 'informationKitRequestID' });

const InformationKitRequestModel = mongoose.model('informationkitrequest', InformationKitRequestSchema);

module.exports = InformationKitRequestModel;

