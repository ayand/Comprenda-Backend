const graphql = require('graphql');
const {
    GraphQLString,
    GraphQLID,
    GraphQLList
} = graphql;

const QuestionType = require('../objects/QuestionType');
const QuestionService = require('../../services/question');

const questionMutations = {
    createQuestion: {
        type: QuestionType,
        args: {
            text: { type: GraphQLString },
            answer: { type: GraphQLString },
            choices: { type: new GraphQLList(GraphQLString) },
            post: { type: GraphQLID }
        },
        resolve(parentValue, { post, text, answer, choices }, req) {
            return QuestionService.createQuestion(post, text, answer, choices);
        }
    }
};

module.exports = questionMutations;
