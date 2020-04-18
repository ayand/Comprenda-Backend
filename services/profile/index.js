const Profile = require('../../models/Profile');

function createProfile(name, bio, languages, user) {
    return (new Profile({ name, bio, user, languages })).save();
}

function editProfile(name, bio, languages, user) {
    const updatedFields = { name, bio, languages }
    return Profile.findOneAndUpdate({ user }, { $set: updatedFields }, { new: true });
}

function getProfile(id) {
    return Profile.findById(id);
}

function getProfileByUser(user) {
    return Profile.findOne({ user })
}

function search(searchString, page) {
    return Profile.find({ $text: { $search: searchString } }).skip((page - 1) * 10).limit(10)
}

module.exports = { createProfile, getProfile, getProfileByUser, editProfile, search }
