const graphql = require('graphql');
const {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList
} = graphql;

const QuestionInputType = new GraphQLInputObjectType({
    name: 'QuestionInputType',
    fields: () => ({
        text: { type: GraphQLString },
        answer: { type: GraphQLString },
        choices: { type: new GraphQLList(GraphQLString) },
        post: { type: GraphQLID },
        id: { type: GraphQLID }
    })
});

module.exports = QuestionInputType;
