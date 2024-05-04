var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const specialistSchema = new Schema({
    specializationID: {
        type: Number
    },
    Name: {
        type: String,
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


specialistSchema.plugin(AutoIncrement, { inc_field: 'specializationID' });

const specialistModel = mongoose.model('specializationList', specialistSchema);

module.exports = specialistModel;

