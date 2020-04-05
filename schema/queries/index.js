const graphql = require('graphql');
const { GraphQLObjectType } = graphql;

const { currentUser } = require('./user');
const { profile } = require('./profile');
const { post, postsByCreator } = require('./post');
const { languages } = require('./language');
const { question, questionsByPost } = require('./question');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
      currentUser,
      profile,
      post,
      postsByCreator,
      languages,
      question,
      questionsByPost
  })
});

module.exports = RootQueryType;
