const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');
class ReviewsAPI extends RESTDataSource {
constructor() {
super();
this.baseURL = serverConfig.reviews_api_url;
 }
async createReviews(reviewsInput) {
reviewsInput = new Object(JSON.parse(JSON.stringify(reviewsInput)));
return await this.post('/api/calificaciones', reviewsInput);
 }
async reviewsById(reviewId) {
return await this.get(`/api/calificaciones/${reviewId}`);
 }
}
module.exports = ReviewsAPI;