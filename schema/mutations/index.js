const graphql = require('graphql');
const {
    GraphQLObjectType
} = graphql;

const { signup, login, logout } = require('./auth');
const { createProfile, editProfile } = require('./profile');
const { createPost } = require('./post');

/*const UserType = require('../objects/UserType');
const ProfileType = require('../objects/ProfileType');

const AuthService = require('../../services/auth');
const ProfileService = require('../../services/profile');*/

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        signup,
        logout,
        login,
        createProfile,
        editProfile,
        createPost
    }
});

module.exports = mutation;
