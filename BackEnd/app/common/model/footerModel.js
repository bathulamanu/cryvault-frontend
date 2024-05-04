var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const footerSchema = new Schema({
    footerID: {
        type: Number
    },
    Logo: {
        type: String
    },
    description: {
        type: String
    },
    footerPara: [
        {
            title: String,
            content: String,
            contactIconAndInfo: [
                {
                    name: String,
                    iconUrl: String,
                    className: String,
                    description: String
                }
            ],
            socialMediaIcons: [
                {
                    name: String,
                    iconUrl: String,
                    className: String,
                    description: String
                }
            ]
        }
    ],
    footerCopyright: {
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


footerSchema.plugin(AutoIncrement, { inc_field: 'footerID' });

const footerSchemaModel = mongoose.model('footer', footerSchema);

module.exports = footerSchemaModel;

