var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const roleSchema = new Schema({
    roleID: {
        type: Number
    },
    roleName: {
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
    status:{
        type:Boolean,
        default:true
    }
});


 roleSchema.plugin(AutoIncrement, { inc_field: 'roleID' });

const roleModel = mongoose.model('role', roleSchema);

module.exports = roleModel;

