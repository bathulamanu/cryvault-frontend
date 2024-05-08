var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const babySchema = new Schema({
    babyID: {
        type: Number
    },
    customerID: {
        type: Number
    },
    babyName: {
        type: String
    },
    babyDOB: {
        type: Date
    },
    timeOfBirth: {
        type: String
    },
    weight: {
        type: String
    },
    DeliveryDoctorName: {
        type: Number  /// Doctor ID
    },
    placeOfBirth: {
        type: Number  // City ID
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


babySchema.plugin(AutoIncrement, { inc_field: 'babyID' });

const babyModel = mongoose.model('babyDetails', babySchema);

module.exports = babyModel;
