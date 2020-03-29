const graphql = require('graphql');
const {
    GraphQLString
} = graphql;

const UserType = require('../objects/UserType');
const AuthService = require('../../services/auth');

const authMutations = {
  signup: {
      type: UserType,
      args: {
          email: { type: GraphQLString },
          password: { type: GraphQLString }
      },
      resolve(parentValue, { email, password }, req) {
          return AuthService.signup({ email, password, req })
      }
  },
  logout: {
      type: UserType,
      resolve(parentValue, args, req) {
          const { user } = req;
          req.logout();
          return user;
      }
  },
  login: {
      type: UserType,
      args: {
          email: { type: GraphQLString },
          password: { type: GraphQLString }
      },
      resolve(parentValue, { email, password }, req) {
          return AuthService.login({ email, password, req })
      }
  }
}

module.exports = authMutations;
