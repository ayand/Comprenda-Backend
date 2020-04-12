const Answer = require('../../models/Answer');

function getAnswer(id) {
    return Answer.findById(id);
}

function getAnswersBySubmission(submission) {
    return Answer.find({ submission });
}

module.exports = { getAnswersBySubmission, getAnswer };
