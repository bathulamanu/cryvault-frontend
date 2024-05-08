var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const logSchema = new Schema({
    logID: {
        type: Number,
        unique: true
    },
    updatedBy: {
        type: Number, // stores customer or employee id
        required: true
    },
    typeOfUser: {
        type: String
    },
    tableName: {
        type: String
    },
    recordID: {
        type: mongoose.Schema.Types.ObjectId
    },
    field:{
        type: String
    },
    oldValue: {
        type: String
    },
    newValue: {
        type: String
    },
    typeOfOperation: {
        type: String,
        required: true
    },
    createdTime: {
        type: Date,
        default: Date.now
    }
});


logSchema.plugin(AutoIncrement, { inc_field: 'logID' });

const logModel = mongoose.model('log', logSchema);

module.exports = logModel;

