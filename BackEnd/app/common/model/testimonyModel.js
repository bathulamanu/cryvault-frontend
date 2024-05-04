
var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const TestimonySchema = new Schema({
    TestimonyID: {
        type: Number
    },
    customerID: {
        type: Number
    },
    Content: {
        type: String
    },
    customerName: {
        type: String
    },
    customerImage: {
        type: String
    },
    customerAltImage: {
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


TestimonySchema.plugin(AutoIncrement, { inc_field: 'TestimonyID' });

const TestimonyModel = mongoose.model('Testimony', TestimonySchema);

module.exports = TestimonyModel;

