const Profile = require('../../models/Profile');

function createProfile(name, bio, user) {
    return (new Profile({ name, bio, user })).save();
}

function editProfile(name, bio, user) {
    const updatedFields = { name, bio }
    return Profile.findOneAndUpdate({ user }, { $set: updatedFields }, { new: true });
}

function getProfile(id) {
    return Profile.findById(id);
}

function getProfileByUser(user) {
    return Profile.findOne({ user })
}

module.exports = { createProfile, getProfile, getProfileByUser, editProfile }
