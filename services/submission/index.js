const QuestionService = require('../question');
const Submission = require('../../models/Submission');
const Answer = require('../../models/Answer');

function getSubmission(id) {
    return Submission.findById(id);
}

function getSubmissionsByUser(user) {
    return Submission.find({ user })
}

async function createSubmission(post, user, answers) {
    const questions = await QuestionService.getQuestionsByPost(post);
    const submission = await (new Submission({ post, user, submissionTime: (new Date()).toString() })).save();
    const answerObjects = answers.map(({ question, answer }) => {
        return {
            question,
            answer,
            isCorrect: questions.filter(q => q.id === question)[0].answer === answer,
            submission: submission.id
        }
    })
    submission.score = answerObjects.filter(o => o.isCorrect).length / questions.length;
    await Answer.insertMany(answerObjects);
    return submission.save();
}

module.exports = { createSubmission, getSubmission, getSubmissionsByUser };
