var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const emergencyAppointmentSchema = new Schema({
    emergencyAppointmentID: {
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
    Age: {
        type: String
    },
    subject: {
        type: String
    },
    queryContent: {
        type: String,
        required: true
    },
    updatedTime: {
        type: Date
    },
    updatedBy:{
        type:Number
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


emergencyAppointmentSchema.plugin(AutoIncrement, { inc_field: 'emergencyAppointmentID' });

const emergencyAppointmentModel = mongoose.model('emergencyappointment', emergencyAppointmentSchema);

module.exports = emergencyAppointmentModel;

