const graphql = require('graphql');
const { GraphQLObjectType } = graphql;

const { currentUser } = require('./user');
const { profile } = require('./profile');
const { post, postsByCreator, posts } = require('./post');
const { languages } = require('./language');
const { question, questionsByPost } = require('./question');
const { submission, submissionsByUser } = require('./submission');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
      currentUser,
      profile,
      post,
      postsByCreator,
      posts,
      languages,
      question,
      questionsByPost,
      submission,
      submissionsByUser
  })
});

module.exports = RootQueryType;
