// id
// title/alt
// feature image
// description/link 
// type 
// status

var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const videoSchema = new Schema({
    videoID: {
        type: Number
    },
    title: {
        type: String
    },
    featureImage: {
        type: String
    },
    description: {
        type: String
    },
    type: {
        type: Number
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


videoSchema.plugin(AutoIncrement, { inc_field: 'videoID' });

const videoModel = mongoose.model('galleryVideo', videoSchema);

module.exports = videoModel;
