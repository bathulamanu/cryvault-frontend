
var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const videoTypeSchema = new Schema({
    videoTypeID: {
        type: Number
    },
    title: {
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


videoTypeSchema.plugin(AutoIncrement, { inc_field: 'videoTypeID' });

const videoTypeModel = mongoose.model('videotype', videoTypeSchema);

module.exports = videoTypeModel;

