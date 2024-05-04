var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const stateSchema = new Schema({
    stateID: {
        type: Number
    },
    name: {
        type: String
    },
    latitude: {
        type: String
    },
    longitude: {
        type: String
    },
    countryID: {
        type: Number
    },
    countryCode:{
        type: String
    },
    countryName: {
        type: String
    },
    stateCode: { 
        type: String
    },
    type: {
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


stateSchema.plugin(AutoIncrement, { inc_field: 'stateID' });

const stateModel = mongoose.model('state', stateSchema);

module.exports = stateModel;

