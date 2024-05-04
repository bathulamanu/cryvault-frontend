// title
// metatitle
// meta description
// metkeywords
// fetureimage 
// short content
// description
// urlslug
// galary
// catogiry
// tags     


var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    blogID: {
        type: Number
    },
    title: {
        type: String
    },
    metaTitle: {
        type: String
    },
    metaDescription: {
        type: String
    },
    metaKeywords: {
        type: String
    },
    featureImage: {
        type: String
    },
    shortContent: {
        type: String
    },
    description: {
        type: String
    },
    urlSlug: {
        type: String
    },
    blogGalary: [
        { image: String, message: String }
    ],
    category: {
        type: String
    },
    tags: {
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


blogSchema.plugin(AutoIncrement, { inc_field: 'blogID' });

const blogModel = mongoose.model('blog', blogSchema);

module.exports = blogModel;


