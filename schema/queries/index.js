const graphql = require('graphql');
const { GraphQLObjectType } = graphql;

const { currentUser } = require('./user');
const { profile } = require('./profile');
const { post, postsByCreator } = require('./post');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
      currentUser,
      profile,
      post,
      postsByCreator
  })
});

module.exports = RootQueryType;
