const graphql = require('graphql');
const {
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLInt
} = graphql;

const ReviewType = require('../objects/ReviewType');
const ReviewService = require('../../services/review');

const reviewMutations = {
    postReview: {
        type: ReviewType,
        args: {
            rating: { type: GraphQLInt },
            text: { type: GraphQLString },
            post: { type: GraphQLID }
        },
        resolve(parentValue, { post, rating, text }, req) {
            return ReviewService.postReview(req.user.id, post, rating, text);
        }
    }
};

module.exports = reviewMutations;
