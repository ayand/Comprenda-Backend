const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLID,
    GraphQLList
} = graphql;

const PostService = require('../../services/post');
const UserService = require('../../services/user');
const AnswerService = require('../../services/answer');

const SubmissionType = new GraphQLObjectType({
    name: 'SubmissionType',
    fields: () => ({
        id: { type: GraphQLID },
        score: { type: GraphQLFloat },
        submissionTime: { type: GraphQLString },
        post: {
            type: require('./PostType'),
            resolve(parentValue) {
                return PostService.getPost(parentValue.post);
            }
        },
        user: {
            type: require('./UserType'),
            resolve(parentValue) {
                return UserService.getUser(parentValue.user);
            }
        },
        answers: {
            type: new GraphQLList(require('./AnswerType')),
            resolve(parentValue) {
                return AnswerService.getAnswersBySubmission(parentValue.id);
            }
        }
    })
})

module.exports = SubmissionType;
