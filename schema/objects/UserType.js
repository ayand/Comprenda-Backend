const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList
} = graphql;

const PostType = require('./PostType');
const ProfileType = require('./ProfileType');
const PostService = require('../../services/post');
const ProfileService = require('../../services/profile');

const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields: () => ({
        id: { type: GraphQLID },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        profile:  {
            type: ProfileType,
            resolve(parentValue) {
                return ProfileService.getProfileByUser(parentValue.id);
            }
        },
        posts: {
            type: new GraphQLList(PostType),
            resolve(parentValue) {
                return PostService.getPostsByCreator(parentValue.id);
            }
        }
    })
});

module.exports = UserType;
