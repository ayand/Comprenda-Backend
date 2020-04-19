const graphql = require('graphql');
const {
    GraphQLObjectType
} = graphql;

const { signup, login, logout } = require('./auth');
const { createProfile, editProfile } = require('./profile');
const { createPost, editPost } = require('./post');
const { addLanguage } = require('./language');
const { createQuestion } = require('./question');
const { createSubmission } = require('./submission');
const { postReview } = require('./review');

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        signup,
        logout,
        login,
        createProfile,
        editProfile,
        createPost,
        editPost,
        addLanguage,
        createQuestion,
        createSubmission,
        postReview
    }
});

module.exports = mutation;
