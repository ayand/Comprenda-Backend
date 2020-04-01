const graphql = require('graphql');
const {
    GraphQLString
} = graphql;

const LanguageType = require('../objects/LanguageType');
const LanguageService = require('../../services/language');

const languageMutations = {
    addLanguage: {
        type: LanguageType,
        args: {
            language: { type: GraphQLString }
        },
        resolve(parentValue, { language }, req) {
            return LanguageService.addLanguage(language);
        }
    }
}

module.exports = languageMutations;
