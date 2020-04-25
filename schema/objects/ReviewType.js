const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLInt
} = graphql;

const ReviewService = require('../../services/review');
const PostService = require('../../services/post');
const UserService = require('../../services/user');

const ReviewType = new GraphQLObjectType({
    name: 'ReviewType',
    fields: () => ({
        id: { type: GraphQLID },
        rating: { type: GraphQLInt },
        text: { type: GraphQLString },
        post: {
            type: require('./PostType'),
            resolve(parentValue) {
                return PostService.getPost(parentValue.post);
            }
        },
        author: {
            type: require('./UserType'),
            resolve(parentValue) {
                return UserService.getUser(parentValue.author);
            }
        }
    })
})

module.exports = ReviewType;
