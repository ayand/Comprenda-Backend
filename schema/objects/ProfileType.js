const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList
} = graphql;

const UserService = require('../../services/user');

const ProfileType = new GraphQLObjectType({
    name: 'ProfileType',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        bio: { type: GraphQLString },
        languages: { type: new GraphQLList(GraphQLString) },
        user: {
            type: require('./UserType'),
            resolve(parentValue) {
                return UserService.getUser(parentValue.user);
            }
        }
    })
});

module.exports = ProfileType;
