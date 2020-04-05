const Question = require('../../models/Question');

function createQuestion(post, text, answer, choices) {
    return (new Question({ post, text, answer, choices })).save();
}

function getQuestion(id) {
    return Question.findById(id);
}

function getQuestionsByPost(post) {
    return Question.find({ post });
}

module.exports = { createQuestion, getQuestion, getQuestionsByPost };
