const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');
class FilmsAPI extends RESTDataSource {
constructor() {
super();
this.baseURL = serverConfig.films_api_url;
 }
async createFilms(filmsInput) {
    filmsInput = new Object(JSON.parse(JSON.stringify(filmsInput)));
return await this.post('/films', filmsInput);
 }
async filmsByNombre_titulo(nombre_titulo) {
return await this.get(`/films/${nombre_titulo}`);
 }
}
module.exports = FilmsAPI;