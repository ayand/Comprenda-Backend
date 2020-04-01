const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LanguageSchema = new Schema({
    language: {
        type: String,
        required: true
    }
});

module.exports = Language = mongoose.model('language', LanguageSchema);
