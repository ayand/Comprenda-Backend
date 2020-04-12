const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
    question: {
        type: Schema.Types.ObjectId,
        ref: 'questions'
    },
    answer: {
        type: String,
        required: true
    },
    isCorrect: {
        type: Boolean,
        required: true
    },
    submission: {
        type: Schema.Types.ObjectId,
        ref: 'submissions'
    }
})

module.exports = Answer = mongoose.model('answer', AnswerSchema);
