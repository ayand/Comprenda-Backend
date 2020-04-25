const Review = require('../../models/Review');

const pageSize = 10;

function postReview(author, post, rating, text) {
    return (new Review({ author, post, rating, text })).save();
}

function getReviewsByPost(post, page) {
    return Review.find({ post }).skip((page - 1) * pageSize).limit(pageSize)
}

module.exports = { postReview, getReviewsByPost };
