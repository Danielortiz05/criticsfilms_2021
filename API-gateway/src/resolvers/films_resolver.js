const filmsResolver = {
    Query: {
        filmsByNombre_titulo: (_, { nombre_titulo }, { dataSources }) => dataSources.filmsAPI.filmsByNombre_titulo(nombre_titulo),
        },
     
    
     Mutation: {
        createFilms: (_, { filmsInput }, { dataSources }) =>  dataSources.filmsAPI.createFilms(filmsInput),
            
     }
};
module.exports = filmsResolver;