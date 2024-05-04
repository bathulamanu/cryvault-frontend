var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const counterSchema = new Schema({
    counterID: {
        type: Number
    },
    CounterImage: {
        type: String
    },
    CounterTitle: {
        type: String
    },
    CounterCount: {
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


counterSchema.plugin(AutoIncrement, { inc_field: 'counterID' });

const counterModel = mongoose.model('customercount', counterSchema);

module.exports = counterModel;

