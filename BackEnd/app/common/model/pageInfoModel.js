var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const pageInfoSchema = new Schema({
    pageMetaInfoID: {
        type: Number
    },
    pageTitle: {
        type: String
    },
    metaTitle: {
        type: String
    },
    metaDescription: {
        type: String
    },
    description: {
        type: String
    },
    metaKeywords: {
        type: String
    },
    urlSlug: {
        type: String
    },
    pageHeaderImage: {
        type: String
    },
    featureImage: {
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


pageInfoSchema.plugin(AutoIncrement, { inc_field: 'pageMetaInfoID' });

const pageInfoModel = mongoose.model('pagemetaInfo', pageInfoSchema);

module.exports = pageInfoModel;

