var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const DoctorQualificationSchema = new Schema({
    DoctorQualificationID: {
        type: Number
    },
    DoctorQualificationAbbreviation: {
        type: String,
        required: true
    },
    DoctorQualificationName:{
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
    status:{
        type:Boolean,
        default:true
    }
});


 DoctorQualificationSchema.plugin(AutoIncrement, { inc_field: 'DoctorQualificationID' });

const DoctorQualificationModel = mongoose.model('DoctorQualification', DoctorQualificationSchema);

module.exports = DoctorQualificationModel;

