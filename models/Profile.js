const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    languages: [{
        type: String
    }]
});

ProfileSchema.index({ name: 'text' });

module.exports = Profile = mongoose.model('profile', ProfileSchema);
