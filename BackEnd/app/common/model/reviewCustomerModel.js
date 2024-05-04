var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    reviewID: {
        type: Number
    },
    reviewOn: {
        reviewWidget: String,
        title: String,
        ratingOutOf: Number,
        totalNumberOfReview: Number,
        content: String,
        poweredBy: String,
        buttonValue: String
    },
    reviewByUser: [
        {
            userImage: String,
            alterImage:String,
            userName: String,
            userEmail: String,
            googleMapLocation:String,
            content: String,
            customerID: Number,
            rating: Number,
            photoOrVideo: [{ file: String }]
        }
    ],
    updatedTime: {
        type: Date
    },
    updatedBy: {
        type: Number
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


reviewSchema.plugin(AutoIncrement, { inc_field: 'reviewID' });

const reviewModel = mongoose.model('reviews', reviewSchema);

module.exports = reviewModel;

