const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubmissionSchema = new Schema({
    post: {
        type: Schema.Types.ObjectId,
        ref: 'posts',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    score: {
        type: Number
    },
    submissionTime: {
        type: String
    }
})

module.exports = Submission = mongoose.model('submission', SubmissionSchema);
