const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLBoolean
} = graphql;

const UserService = require('../../services/user');

const PostType = new GraphQLObjectType({
    name: 'PostType',
    fields: () => ({
        id: {  type: GraphQLID },
        title: { type: GraphQLString },
        body: { type: GraphQLString },
        description: { type: GraphQLString },
        language: { type: GraphQLString },
        ready: { type: GraphQLBoolean },
        creator: {
            type: require('./UserType'),
            resolve(parentValue) {
                return UserService.getUser(parentValue.creator);
            }
        }
    })
})

module.exports = PostType;
