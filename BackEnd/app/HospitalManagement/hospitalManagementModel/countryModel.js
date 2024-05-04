var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const countrySchema = new Schema({
    countryID: {
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
    capital:{
        type: String
    },
    countryCode:{
        type: String
    },
    iso2:{
        type: String
    },
    currency:{
        type: String
    },
    currencyName:{
        type: String
    },
    currencySymbol:{
        type: String
    },
    nationality:{
        type: String
    },
    timezones:{
        type:Array
    },
    flag:{
        type: String,
        default:""
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


countrySchema.plugin(AutoIncrement, { inc_field: 'countryID' });

const countryModel = mongoose.model('country', countrySchema);

module.exports = countryModel;


