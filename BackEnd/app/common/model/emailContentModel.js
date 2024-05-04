
var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const emailContentSchema = new Schema({
    emailContentID: {
        type: Number
    },
    name: {
        type: String
    },
    emailDescription: {
        type: String
    },
    emailLink: {
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


emailContentSchema.plugin(AutoIncrement, { inc_field: 'emailContentID' });

const emailContentModel = mongoose.model('emailContent', emailContentSchema);

module.exports = emailContentModel;
