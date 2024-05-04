var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const ReachUsSchema = new Schema({
    ReachUsID: {
        type: Number
    },
    fullName: {
        type: String
    },
    Email: {
        type: String
    },
    countryCode: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    Subject: {
        type: String
    },
    pageName: {
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


ReachUsSchema.plugin(AutoIncrement, { inc_field: 'ReachUsID' });

const ReachUsModel = mongoose.model('reachus', ReachUsSchema);

module.exports = ReachUsModel;

