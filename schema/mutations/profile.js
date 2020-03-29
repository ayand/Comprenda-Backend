const graphql = require('graphql');
const {
    GraphQLString
} = graphql;

const ProfileType = require('../objects/ProfileType');
const ProfileService = require('../../services/profile');

const profileMutations = {
    createProfile: {
        type: ProfileType,
        args: {
            name: { type: GraphQLString },
            bio: { type: GraphQLString }
        },
        resolve(parentValue, { name, bio }, req) {
            return ProfileService.createProfile(name, bio, req.user.id);
        }
    },
    editProfile: {
        type: ProfileType,
        args: {
            name: { type: GraphQLString },
            bio: { type: GraphQLString }
        },
        resolve(parentValue, { name, bio }, req) {
            return ProfileService.editProfile(name, bio, req.user.id);
        }
    }
}

module.exports = profileMutations;
