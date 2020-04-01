const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID
} = graphql;

const LanguageType = new GraphQLObjectType({
    name: 'LanguageType',
    fields: () => ({
        id: { type: GraphQLID },
        language: { type: GraphQLString }
    })
})

module.exports = LanguageType;
