const graphql = require('graphql');
const {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList
} = graphql;

const AnswerInputType = new GraphQLInputObjectType({
    name: 'AnswerInputType',
    fields: () => ({
        question: { type: GraphQLID },
        answer: { type: GraphQLString }
    })
})

module.exports = AnswerInputType;
