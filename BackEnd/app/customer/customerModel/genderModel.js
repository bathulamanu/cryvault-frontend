var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const genderSchema = new Schema({
    genderID: {
        type: Number
    },
    name: {
        type: String,
        unique:true
    },
    createdTime: {
        type: Date,
        default: Date.now
    },
    updatedBy: {
        type: Number
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


genderSchema.plugin(AutoIncrement, { inc_field: 'genderID' });

const genderModel = mongoose.model('gender', genderSchema);

module.exports = genderModel;

