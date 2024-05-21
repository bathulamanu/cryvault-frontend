var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
    AppointmentID: {
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
    countryCode: {
        type: String
    },
    phoneNumber: {
        type: String,
        required: true
    },
    appointmentDate: {
        type: Date,
        required: true
    },
    expectedDeliveryDate: {
        type: Date,
        required: true
    },
    docterName: {
        type: String
    },
    hospital: {
        type: String,
        required: true
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


AppointmentSchema.plugin(AutoIncrement, { inc_field: 'AppointmentID' });

const AppointmentModel = mongoose.model('appointment', AppointmentSchema);

module.exports = AppointmentModel;

