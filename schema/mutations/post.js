const graphql = require('graphql');
const {
    GraphQLString,
    GraphQLID
} = graphql;

const PostType = require('../objects/PostType');
const PostService = require('../../services/post');

const postMutations = {
    createPost: {
        type: PostType,
        args: {
            title: { type: GraphQLString },
            body: { type: GraphQLString },
            description: { type: GraphQLString },
            language: { type: GraphQLString }
        },
        resolve(parentValue, { title, body, description, language }, req) {
            return PostService.createPost(req.user.id, title, body, description, language);
        }
    },
    editPost: {
        type: PostType,
        args: {
            id: { type: GraphQLID },
            title: { type: GraphQLString },
            body: { type: GraphQLString },
            description: { type: GraphQLString }
        },
        resolve(parentValue, { id, title, body, description }, req) {
            return PostService.editPost(id, title, body, description);
        }
    }
}

module.exports = postMutations;
