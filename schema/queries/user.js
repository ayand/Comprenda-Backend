const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;

const UserType = require('../objects/UserType');

module.exports = {
  currentUser: {
      type: UserType,
      resolve(parentValue, args, req) {
          return req.user;
      }
  }
}
