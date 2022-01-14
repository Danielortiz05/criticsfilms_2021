const { gql } = require('apollo-server');
const filmsTypeDefs = gql `
 type Films {
    nombre_titulo: String!
    sinopsis: String!
    director: String!
    casting: String!
    genero: String!
    anio: Int!
 
 }
 
 input FilmsInput {
    nombre_titulo: String!
    sinopsis: String!
    director: String!
    casting: String!
    genero: String!
    anio: Int!
    }
   
 type Query {
 filmsByNombre_titulo(nombre_titulo: String!): Films
 }
 type Mutation { 
    createFilms(filmsInput: FilmsInput): Films!
    }
   
`;
module.exports = filmsTypeDefs;