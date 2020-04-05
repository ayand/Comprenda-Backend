const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLBoolean,
    GraphQLList
} = graphql;

const QuestionService = require('../../services/question');
const UserService = require('../../services/user');

const QuestionType = require('./QuestionType')

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
        },
        questions: {
            type: new GraphQLList(QuestionType),
            resolve(parentValue) {
                return QuestionService.getQuestionsByPost(parentValue.id);
            }
        }
    })
})

module.exports = PostType;
