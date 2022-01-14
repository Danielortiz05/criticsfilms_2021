const reviewsResolver = {
    Query: {
        reviewsById: (_, { reviewId }, { dataSources }) =>  dataSources.reviewsAPI.reviewsById(reviewId),
    
     },
     Mutation: {
        createReviews: (_, { reviewsInput }, { dataSources }) =>  dataSources.reviewsAPI.createReviews(reviewsInput),
     }
};
module.exports = reviewsResolver;