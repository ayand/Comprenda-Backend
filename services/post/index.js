const Post = require('../../models/Post');

function createPost(creator, title, body, description, language) {
    return (new Post({ creator, title, body, description, language })).save();
}

function editPost(id, creator, title, body, description, language) {
    const updatedFields = { creator, title, body, description, language };
    return Post.findOneAndUpdate({ id }, { $set: updatedFields }, { new: true });
}

function getPost(id) {
    return Post.findById(id);
}

function getPostsByCreator(creator) {
    return Post.find({ creator });
}

module.exports = { createPost, editPost, getPost, getPostsByCreator }
