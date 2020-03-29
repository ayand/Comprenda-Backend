const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    ready: {
        type: Boolean,
        default: false,
        required: true
    }
});

PostSchema.index({ title: 'text', language: 'text' });

module.exports = Post = mongoose.model('post', PostSchema);
