const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLList } = graphql;

const LanguageType = require('../objects/LanguageType');
const LanguageService = require('../../services/language');

module.exports = {
    languages: {
        type: new GraphQLList(LanguageType),
        resolve(parentValue, args, req) {
            return LanguageService.getLanguages();
        }
    }
}
