const graphql = require('graphql');
const {
    GraphQLString,
    GraphQLID
} = graphql;

const PostInputType = require('../objects/input/PostInputType');
const PostType = require('../objects/PostType');
const PostService = require('../../services/post');

const postMutations = {
    createPost: {
        type: PostType,
        args: {
            post: { type: PostInputType }
        },
        resolve(parentValue, { post }, req) {
            const { title, body, description, language, questions } = post;
            return PostService.createPost(req.user.id, title, body, description, language, questions);
        }
    },
    editPost: {
        type: PostType,
        args: {
            post: { type: PostInputType }
        },
        resolve(parentValue, { post }, req) {
            const { id, title, body, description, language, questions } = post;
            return PostService.editPost(id, title, body, description, questions);
        }
    }
}

module.exports = postMutations;
