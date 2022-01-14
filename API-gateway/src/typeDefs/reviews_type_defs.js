const { gql } = require('apollo-server');
const reviewsTypeDefs = gql `
 type Reviews {
   id: Int!
   nombre_titulo: String!
   calificacion: Int!
   promedio_calificacion: Int!
   critica: String!
 }
 input ReviewsInput {
    nombre_titulo: String!
    calificacion: Int!
    promedio_calificacion: Int!
    critica: String!
    }
 type Query {
 reviewsById(reviewId: Int!): Reviews!
 }
 type Mutation {
    createReviews(reviewsInput: ReviewsInput): Reviews!
    }
   
`;
module.exports = reviewsTypeDefs;