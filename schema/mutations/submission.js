const graphql = require('graphql');
const {
    GraphQLString,
    GraphQLID,
    GraphQLList
} = graphql;

const SubmissionType = require('../objects/SubmissionType');
const SubmissionInputType = require('../objects/input/SubmissionInputType');
const SubmissionService = require('../../services/submission');

const submissionMutations = {
    createSubmission: {
        type: SubmissionType,
        args: {
            submission: { type: SubmissionInputType }
        },
        resolve(parentValue, { submission }, req) {
            const { post, answers } = submission;
            return SubmissionService.createSubmission(post, req.user.id, answers);
        }
    }
}

module.exports = submissionMutations;
