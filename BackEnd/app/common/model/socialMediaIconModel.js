
const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);


const socialMediaIconSchema = new mongoose.Schema({
    iconID: { type: Number },
    websiteLogo: {
        favicon: String,
        Logo: String
    },
    contactIcons: [
        {
            name: String,
            iconUrl: String,
            className: String,
            description: String
        }
    ],
    SocialMedia: [
        {
            name: String,
            iconUrl: String,
            className: String,
            description: String
        }
    ],
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


socialMediaIconSchema.plugin(AutoIncrement, { inc_field: 'iconID' });

const SocialMediaIcon = mongoose.model('SocialMediaIcon', socialMediaIconSchema);

module.exports = SocialMediaIcon;

