const graphql = require('graphql');
const {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList
} = graphql;
const QuestionInputType = require('./QuestionInputType');

const PostInputType = new GraphQLInputObjectType({
    name: 'PostInputType',
    fields: () => ({
        title: { type: GraphQLString },
        body: { type: GraphQLString },
        description: { type: GraphQLString },
        language: { type: GraphQLString },
        questions: { type: new GraphQLList(QuestionInputType) },
        id: { type: GraphQLID }
    })
});

module.exports = PostInputType;
