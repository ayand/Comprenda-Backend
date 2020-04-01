const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    choices: [{
        type: String
    }],
    post: {
        type: Schema.Types.ObjectId,
        ref: 'posts'
    }
});

module.exports = Question = mongoose.model('question', QuestionSchema);
