const graphql = require('graphql');
const { GraphQLSchema } = graphql;

const RootQueryType = require('./queries');
const mutation = require('./mutations');

module.exports = new GraphQLSchema({
    query: RootQueryType,
    mutation
});
