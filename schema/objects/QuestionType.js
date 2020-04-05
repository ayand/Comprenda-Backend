const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList
} = graphql;

const PostService = require('../../services/post');

const QuestionType = new GraphQLObjectType({
    name: 'QuestionType',
    fields: () => ({
        id: { type: GraphQLID },
        text: { type: GraphQLString },
        answer: { type: GraphQLString },
        choices: { type: new GraphQLList(GraphQLString) },
        post: {
            type: require('./PostType'),
            resolve(parentValue) {
                return PostService.getPost(parentValue.post);
            }
        }
    })
})

module.exports = QuestionType;
