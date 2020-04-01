const Language = require('../../models/Language');

function addLanguage(language) {
    return (new Language({ language })).save();
};

function getLanguages() {
    return Language.find({});
}

module.exports = { addLanguage, getLanguages };
