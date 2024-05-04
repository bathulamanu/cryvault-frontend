var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    BranchContactID: {
        type: Number
    },
    LocationName: {
        type: String
    },
    Address: {
        type: String
    },
    ContactInfo: [{
        title: String,
        value: String
    }],
    EmailInfo: [{
        title: String,
        value: String
    }],
    updatedBy:{
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


ContactSchema.plugin(AutoIncrement, { inc_field: 'BranchContactID' });

const ContactModel = mongoose.model('contact', ContactSchema);

module.exports = ContactModel;

