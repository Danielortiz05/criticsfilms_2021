<template lang="html">
<div class="Pelicula">
          
       <div class="pic"> 
       <img src="../assets/dracula.jpg"> 
        </div>
  
            
                 
    <div class="datos">

        
        <h2>
    TÍTULO:
    
    <span>{{ filmsByNombre_titulo.nombre_titulo }}</span>
    </h2>

     <h2>
    SINÓPSIS:
    </h2>
    <h3>
    <span>{{ filmsByNombre_titulo.sinopsis }}</span>
    </h3>

    <h2>
    DIRECTOR:
    </h2>
    <h3>
    <span>{{ filmsByNombre_titulo.director }}</span>
    </h3>
    <h2>
    CASTING:
    </h2>
    <h3>
    <span>{{ filmsByNombre_titulo.casting }}</span>
    </h3>
    <h2>
    GÉNERO:
    </h2>
    <h3>
    <span>{{  filmsByNombre_titulo.genero}}</span>
    </h3>
    <h2>
    AÑO:
    </h2>
    <h3>
    <span>{{filmsByNombre_titulo.anio  }}</span>
    </h3>
  
            </div>
        
      
        

        
</div>
    
</template>

<script>
import gql from "graphql-tag"
export default {
    name: "Pelicula",

    data: function(){
return{
    nombreTitulo:new String ("Drácula, de Bram Stoker"),
    filmsByNombre_titulo:{
        nombre_titulo: "",
        sinopsis:"",
        director:"",
        casting:"",
        genero:"",
        anio:"",

    },

};
  },

apollo: {

filmsByNombre_titulo:{
        query: gql`
query Query($nombreTitulo: String!) {
  filmsByNombre_titulo(nombre_titulo: $nombreTitulo) {
    nombre_titulo
    sinopsis
    director
    casting
    genero
    anio
  }
}
 `,

variables() {
return{

nombreTitulo:this.nombreTitulo,

}    

 
 }
 }
 },




  created: function(){
  }

}
</script>

<style>
body{
    margin: 0 0 0 0;
    width: 1180px;
    margin: 10px auto;
    background-color: #212529;
    padding: 10px 20px 20px 0px;
        }
    
     .main-component
{
 height: 75vh;
 margin: 0%;
 padding: 0%;
 background: #212529;
 
}
.film-home img {
  width: 320px;
  height: 430px;
  margin-left: 20px;
  margin-bottom: 30px;
}


.pic img {
     float: left;
  align-items: left;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 500px;
  margin-left: 100px;
  margin-top: 10px;
  margin-bottom: 5px;
  display: block;
  
}

.Pelicula {
    text-align:center;
    color:#c97416;;
    margin: 30 0 0 30;
    width: 1180px;
    justify-content: center;
    align-items: right;
    margin: 10px auto;
   
    padding: 20px 20px 20px 2px;
 }

 .Pelicula h2{
    margin: 20px auto 50px auto; 
    justify-content: center;
    align-items: center;
    text-align:center
 }
 .Pelicula h3{
    margin: 20px auto 50px auto; 
    justify-content: center;
    align-items: center;
    text-align:center;
    color:#f5f0eb;
 }
</style>