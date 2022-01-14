//Se llama al typedef (esquema) de cada submodulo
const filmsTypeDefs = require('./films_type_defs');
const reviewsTypeDefs = require('./reviews_type_defs');
const authTypeDefs = require('./auth_type_defs');
//Se unen
const schemasArrays = [authTypeDefs, filmsTypeDefs, reviewsTypeDefs];
//Se exportan
module.exports = schemasArrays;