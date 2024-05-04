var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);
const { v4: uuidv4 } = require('uuid');


const Schema = mongoose.Schema;

const customerHelpAnyIssueSchema = new Schema({
    customerHelpAnyDetailsID: {
        type: Number
    },
    customerHelpTitleNo: {
        type: Number,
        required: true
    },
    questionId: {
        type: Number,
        required: true
    },
    customerID: {
        type: Number
    },
    issue: {
        type: String
    },
    createdTime: {
        type: Date,
        default: Date.now
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


customerHelpAnyIssueSchema.plugin(AutoIncrement, { inc_field: 'customerHelpAnyDetailsID' });

const customerHelpQuestionSchemaModel = mongoose.model('customerhelpanydetails', customerHelpAnyIssueSchema);

module.exports = customerHelpQuestionSchemaModel;

