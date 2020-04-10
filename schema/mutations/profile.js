const graphql = require('graphql');
const {
    GraphQLString,
    GraphQLList
} = graphql;

const ProfileType = require('../objects/ProfileType');
const ProfileService = require('../../services/profile');

const profileMutations = {
    createProfile: {
        type: ProfileType,
        args: {
            name: { type: GraphQLString },
            bio: { type: GraphQLString },
            languages: { type: new GraphQLList(GraphQLString) }
        },
        resolve(parentValue, { name, bio, languages }, req) {
            return ProfileService.createProfile(name, bio, languages, req.user.id);
        }
    },
    editProfile: {
        type: ProfileType,
        args: {
            name: { type: GraphQLString },
            bio: { type: GraphQLString },
            languages: { type: new GraphQLList(GraphQLString) }
        },
        resolve(parentValue, { name, bio, languages }, req) {
            return ProfileService.editProfile(name, bio, languages, req.user.id);
        }
    }
}

module.exports = profileMutations;
