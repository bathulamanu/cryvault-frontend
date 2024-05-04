var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);
const { v4: uuidv4 } = require('uuid');


const Schema = mongoose.Schema;

const customerHelpSchema = new Schema({
    customerHelpID: {
        type: Number
    },
    customerHelpTitle: {
        customerHelpTitleID: Number,
        type: Array,
        questions: [{
            questionsId: Number, 
            check: String
        }]
    },
    updatedBy: {
        type: Number
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

// async function generateUniqueId(next) {
//     console.log("cehck ");
//     // Implement your unique ID generation logic here
//     // For example, you could use UUIDs or any other unique identifier generation method
//     return await uuidv4(); // Assuming you have a function to generate UUIDs
//     // next();
// }

async function updateFieldIds(next) {
    const doc = this;
    if (!doc.isNew) {
        return next();
    }

    let counter = 1; // Initial value for auto-increment
    let count = 1
    // Loop through each item in the array and assign auto-incremented IDs
    doc.customerHelpTitle.forEach(item => {
        // console.log("check jjjjjjjjjjjjjjjjj ",);
        if (item.questions.length != 0) {
            item.questions.forEach(dd => {
                dd.questionsId = count++;
            })
        }
        item.customerHelpTitleID = counter++;
    });

    next();
}

customerHelpSchema.pre('save', updateFieldIds);


customerHelpSchema.plugin(AutoIncrement, { inc_field: 'customerHelpID' });


const customerHelpModel = mongoose.model('customerhelp', customerHelpSchema);

module.exports = customerHelpModel;

