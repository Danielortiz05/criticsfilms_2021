const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const FilmsAPI = require('./dataSources/films_api');
const ReviewsAPI = require('./dataSources/reviews_api');
const AuthAPI = require('./dataSources/auth_api');
const authentication = require('./utils/authentication');
const server = new ApolloServer({
context: authentication,
typeDefs,
resolvers,
dataSources: () => ({
filmsAPI: new FilmsAPI(),
reviewsAPI: new ReviewsAPI(),
authAPI: new AuthAPI(),
 }),
introspection: true,
playground: true
});
server.listen(process.env.PORT || 4000).then(({ url }) => {
console.log(`🚀 Server ready at ${url}`);
});
