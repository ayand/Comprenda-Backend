const Post = require('../../models/Post');

function createPost(creator, title, body, description, language) {
    return (new Post({ creator, title, body, description, language })).save();
}

function editPost(id, title, body, description) {
    const updatedFields = { title, body, description };
    return Post.findByIdAndUpdate({ _id: id }, { $set: updatedFields }, { new: true });
}

function getPost(id) {
    return Post.findById(id);
}

function getPostsByCreator(creator) {
    return Post.find({ creator });
}

function search(searchString, page) {
    return Post.find({ $text: { $search: searchString } }).skip((page - 1) * 10).limit(10)
}

module.exports = { createPost, editPost, getPost, getPostsByCreator, search }
