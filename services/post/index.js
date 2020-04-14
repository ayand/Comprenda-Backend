const Post = require('../../models/Post');
const Question = require('../../models/Question');

/*function createPost(creator, title, body, description, language) {
    return (new Post({ creator, title, body, description, language })).save();
}*/

async function createPost(creator, title, body, description, language, questions) {
    const newPost = await (new Post({ creator, title, body, description, language })).save();
    const questionObjects = questions.map((question) => {
        //question.post = newPost.id;
        const { text, answer, choices } = question;
        const output = { text, answer, choices, post: newPost.id }
        console.log(output)
        return output;
        //return question;
    })
    await Question.insertMany(questionObjects);
    return Promise.resolve(newPost);
}

async function editPost(id, title, body, description, questions) {
    const updatedFields = { title, body, description };
    const questionObjects = questions.filter(question => !question.id).map((question) => {
        const { text, answer, choices } = question;
        const output = { text, answer, choices, post: id }
        console.log(output)
        return output;
    })
    console.log(questionObjects);
    await Question.insertMany(questionObjects);
    console.log("Edit successful!");
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
