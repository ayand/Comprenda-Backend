const graphql = require('graphql');
const {
    GraphQLObjectType
} = graphql;

const { signup, login, logout } = require('./auth');
const { createProfile, editProfile } = require('./profile');
const { createPost } = require('./post');
const { addLanguage } = require('./language');

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        signup,
        logout,
        login,
        createProfile,
        editProfile,
        createPost,
        addLanguage
    }
});

module.exports = mutation;
