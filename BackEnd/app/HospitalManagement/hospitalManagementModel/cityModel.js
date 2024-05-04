var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const citySchema = new Schema({
    cityID: {
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
    stateID:{
        type: Number
    },
    stateCode:{
        type: String
    },
    stateName:{
        type: String
    },   
    countryID: {
        type: Number
    },
    countryName: {
        type: String
    },
    countryCode: {
        type: String
    },
    wikiDataId: {
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


citySchema.plugin(AutoIncrement, { inc_field: 'cityID' });

const cityModel = mongoose.model('city', citySchema);

module.exports = cityModel;

