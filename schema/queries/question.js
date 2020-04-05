const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLList } = graphql;

const QuestionType = require('../objects/QuestionType');
const QuestionService = require('../../services/question');

module.exports = {
    question: {
        type: QuestionType,
        args: { id: { type: GraphQLID} },
        resolve(parentValue, { id }, req) {
            return QuestionService.getQuestion(id);
        }
    },
    questionsByPost: {
        type: new GraphQLList(QuestionType),
        args: { post: { type: GraphQLID} },
        resolve(parentValue, { post }, req) {
            return QuestionService.getQuestionsByPost(post);
        }
    }
}
