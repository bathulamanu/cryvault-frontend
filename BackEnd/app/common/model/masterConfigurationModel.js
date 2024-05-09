var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const masterConfigurationSchema = new Schema({
    masterConfigurationID: {
        type: Number
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    value: {
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


masterConfigurationSchema.plugin(AutoIncrement, { inc_field: 'masterConfigurationID' });

const masterConfigurationModel = mongoose.model('masterConfiguration', masterConfigurationSchema);

module.exports = masterConfigurationModel;

