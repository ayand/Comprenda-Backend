const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;

const UserType = require('./types/objects/UserType');
const ProfileType = require('./types/objects/ProfileType');

const Profile = require('../models/Profile');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
      currentUser: {
          type: UserType,
          resolve(parentValue, args, req) {
              return req.user;
          }
      },
      profile: {
          type: ProfileType,
          args: { id: { type: GraphQLID } },
          resolve(parentValue, { id }, req) {
              return Profile.findById(id);
          }
      }
  })
});

module.exports = RootQueryType;
