const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLList, GraphQLInt, GraphQLString } = graphql;

const PostType = require('../objects/PostType');
const PostService = require('../../services/post');

module.exports = {
    post: {
        type: PostType,
        args: { id: { type: GraphQLID } },
        resolve(parentValue, { id }, req) {
            return PostService.getPost(id);
        }
    },
    postsByCreator: {
        type: new GraphQLList(PostType),
        args: { creator: { type: GraphQLID } },
        resolve(parentValue, { creator }, req) {
            return PostService.getPostsByCreator(creator);
        }
    },
    posts: {
        type: new GraphQLList(PostType),
        args: { searchString: { type: GraphQLString }, index: { type: GraphQLInt } },
        resolve(parentValue, { searchString, index }, req) {
            return PostService.search(searchString, index);
        }
    }
}
