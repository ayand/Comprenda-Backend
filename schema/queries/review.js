const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLInt, GraphQLList } = graphql;

const ReviewType = require('../objects/ReviewType');
const ReviewService = require('../../services/review');

module.exports = {
    reviewsByPost: {
        type: new GraphQLList(ReviewType),
        args: {
            post: { type: GraphQLID },
            page: { type: GraphQLInt }
        },
        resolve(parentValue, { post, page }, req) {
            return ReviewService.getReviewsByPost(post, page);
        }
    }
}
