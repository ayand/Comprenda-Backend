const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLID,
    GraphQLList
} = graphql;

const SubmissionService = require('../../services/submission');
const QuestionService = require('../../services/question');

const AnswerType = new GraphQLObjectType({
    name: 'AnswerType',
    fields: () => ({
        id: { type: GraphQLID },
        answer: { type: GraphQLString },
        isCorrect: { type: GraphQLBoolean },
        question: {
          type: require('./QuestionType'),
          resolve(parentValue) {
              return QuestionService.getQuestion(parentValue.question);
          }
        },
        submission: {
          type: require('./SubmissionType'),
          resolve(parentValue) {
              return SubmissionService.getSubmission(parentValue.submission);
          }
        }
    })
})

module.exports = AnswerType;
