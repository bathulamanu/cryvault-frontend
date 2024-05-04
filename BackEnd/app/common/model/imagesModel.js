
var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const imageSchema = new Schema({
    imageID: {
        type: Number
    },
    title: {
        type: String
    },
    imageKey: {
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


imageSchema.plugin(AutoIncrement, { inc_field: 'imageID' });

const imageModel = mongoose.model('galleryImage', imageSchema);

module.exports = imageModel;
