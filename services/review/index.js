const Review = require('../../models/Review');

function postReview(author, post, rating, text) {
    return (new Review({ author, post, rating, text })).save();
}

function getReviewsByPost(post, page) {
    return Review.find({ post }).skip((page - 1) * 10).limit(10)
}

module.exports = { postReview, getReviewsByPost };
