var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const doctorAssignmentSchema = new Schema({
    doctorAssignmentID: {
        type: Number
    },
    hospitalID: {
        type: Number,
        required: true
    },
    // branchID: {
    //     type: Number,
    //     required: true
    // },
    doctorDetailsID: {
        type: Number,
        required: true
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


doctorAssignmentSchema.plugin(AutoIncrement, { inc_field: 'doctorAssignmentID' });

const doctorAssignmentModel = mongoose.model('doctorAssignment', doctorAssignmentSchema);

module.exports = doctorAssignmentModel;

