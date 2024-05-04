var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);
const { v4: uuidv4, stringify } = require('uuid');


const Schema = mongoose.Schema;

const customerBabySchema = new Schema({
    customerBabyID: {
        type: Number
    },
    customerAnnexureInformationId: {
        // type: Schema.Types.ObjectId,
        // ref: 'customerAnnexureInformation'
        type: Number
    },
    customerID: {
        type: Number
    },
    customerBabyName: {
        type: String
    },
    customerBabyDOB: {
        type: Date
    },
    customerBabyBirthTime: {
        type: String
    },
    customerBabyWeight: {
        type: String
    },
    DeliveryDoctorID: {
        type: Number
    },
    PlaceOfBirth: {
        type: String
    },
    updatedBy: {
        type: Number
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



customerBabySchema.plugin(AutoIncrement, { inc_field: 'customerBabyID' });


const customerBabyModel = mongoose.model('customerbabydetails', customerBabySchema);

module.exports = customerBabyModel;

