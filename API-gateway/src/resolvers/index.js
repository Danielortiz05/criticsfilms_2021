const filmsResolver = require('./films_resolver');
const reviewsResolver = require('./reviews_resolver');
const authResolver = require('./auth_resolver');
const lodash = require('lodash');
const resolvers = lodash.merge(filmsResolver, reviewsResolver, authResolver);
module.exports = resolvers;

