const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;

const ProfileType = require('../objects/ProfileType');
const ProfileService = require('../../services/profile');

module.exports = {
    profile: {
        type: ProfileType,
        args: { id: { type: GraphQLID } },
        resolve(parentValue, { id }, req) {
            return ProfileService.getProfile(id);
        }
    }
}
