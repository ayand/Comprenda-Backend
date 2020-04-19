const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    rating: {
        type: Number,
    },
    text: {
        type: String
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'posts'
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
})

module.exports = Review = mongoose.model('review', ReviewSchema);
