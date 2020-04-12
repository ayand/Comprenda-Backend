const graphql = require('graphql');
const {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList
} = graphql;
const AnswerInputType = require('./AnswerInputType');

const SubmissionInputType = new GraphQLInputObjectType({
    name: 'SubmissionInputType',
    fields: () => ({
        post: { type: GraphQLID },
        answers: { type: new GraphQLList(AnswerInputType) }
    })
})

module.exports = SubmissionInputType;
