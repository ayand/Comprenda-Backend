const graphql = require('graphql');
const {
    GraphQLString,
    GraphQLID
} = graphql;

const PostType = require('../objects/PostType');
const PostService = require('../../services/Post');

const postMutations = {
    createPost: {
        type: PostType,
        args: {
            creator: { type: GraphQLID },
            title: { type: GraphQLString },
            body: { type: GraphQLString },
            description: { type: GraphQLString },
            language: { type: GraphQLString }
        },
        resolve(parentValue, { creator, title, body, description, language }, req) {
            return PostService.createPost(creator, title, body, description, language);
        }
    }
}

module.exports = postMutations;
