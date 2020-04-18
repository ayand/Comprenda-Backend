const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLList, GraphQLString, GraphQLInt } = graphql;

const ProfileType = require('../objects/ProfileType');
const ProfileService = require('../../services/profile');

module.exports = {
    profile: {
        type: ProfileType,
        args: { id: { type: GraphQLID } },
        resolve(parentValue, { id }, req) {
            return ProfileService.getProfile(id);
        }
    },
    profiles: {
        type: new GraphQLList(ProfileType),
        args: { searchString: { type: GraphQLString }, index: { type: GraphQLInt } },
        resolve(parentValue, { searchString, index }, req) {
            return ProfileService.search(searchString, index);
        }
    }
}
