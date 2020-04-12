const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLList } = graphql;

const SubmissionType = require('../objects/SubmissionType');
const SubmissionService = require('../../services/submission');

module.exports = {
    submission: {
        type: SubmissionType,
        args: { id: { type: GraphQLID } },
        resolve(parentValue, { id }, req) {
            return SubmissionService.getSubmission(id);
        }
    },
    submissionsByUser: {
        type: new GraphQLList(SubmissionType),
        args: { user: { type: GraphQLID } },
        resolve(parentValue, { user }, req) {
            return SubmissionService.getSubmissionsByUser(user);
        }
    }
}
