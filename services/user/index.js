const User = require('../../models/User');

function getUser(id) {
    return User.findById(id);
}

module.exports = { getUser };
