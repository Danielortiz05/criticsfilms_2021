<template>
<div class="Home">
     <h3> Peliculas Destacadas</h3>  
  <!-- Boody -->
  <div class="container-fluid">
      <div class="row">
        
        <div class="pic">
          
            <a href="../encanto"> <img src="../assets/encanto.jpg"> </a> 
           <a href="../lavidaesbella"> <img src="../assets/lveb.jpg"> </a> 
         <a href="../amelie"> <img src="../assets/amelie.jpg"> </a> 
      
           
        </div>
       
       <!-- Boody Recomendacion -->
        <div class="container-fluid">
        <span class="titulo-recomendacion">CRITICSFILMS: </span>
        <span class="texto-recomendacion"> Tiene las mejores recomendaciones para ti</span>
        </div> 
        <div class="row">
            <div class="col">
            <a class="recomendacion" href="#">
                <img v-bind:src="require('../assets/mandalorian.png')" alt="Serie Lucifer cartel">
            </a>
            </div>
            <div class="col">
            <a class="recomendacion" href="#">
                <img v-bind:src="require('../assets/it.png')" alt="Serie Games of Thrones cartel">
            </a>
            </div>
            <div class="col">
            <a class="recomendacion" href="#">
                <img v-bind:src="require('../assets/casapapel.png')" alt="Película 007 cartel">
            </a>
            </div> 
            <div class="col">
            <a class="recomendacion" href="#">
                <img v-bind:src="require('../assets/juego_calamar.png')" alt="Película 007 cartel">
            </a>
            </div> 
            <div class="col">
            <a class="recomendacion" href="#">
                <img v-bind:src="require('../assets/avengers.png')" alt="Película 007 cartel">
            </a>
            </div>       
        </div>   
     </div>
 </div>
</div>
</template>

<script>
export default {
    name: "Home",

    data: function(){
  },

  methods:{
  },

  created: function(){
  }

}
</script>

<style>
.film-home img {
  width: 320px;
  height: 430px;
  margin-left: 20px;
  margin-bottom: 30px;
}

.recomendacion img {
  align-items: right;
  width: 250px;
  height: 150px;
  margin-left: 100px;
  margin-top: 10px;
  margin-bottom: 5px;
}

.pic img {
  align-items: right;
  width: 300px;
  height: 500px;
  margin-left: 100px;
  margin-top: 10px;
  margin-bottom: 5px;
  
}
.titulo-recomendacion {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16pt;
  font-weight: bold;
  color: #c96417;
  margin-left: 370pt;
}

.texto-recomendacion {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 14pt;
  font-weight: bold;
  color: #ffffff;
}

</style>