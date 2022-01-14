<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col text-left"> 
        <div class="col">
          <h2>Listado de Califcaciones</h2>
          <a type="submit" size="sm" href="/pelicula/calificacion/new" variant="Primary">
            Nueva Calificacion
          </a>
          
        </div>
        <br>
        <div class="col-md-12">
          <table class= "table table-bordered" striped hover :items="calificacion" :fields="fields">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Calificacion</th>
                  <th>Promedio Calificacion</th>
                  <th>Critica</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for = "calificacion in calificacion">
                  <td>{{ calificacion.nombre_titulo }}</td>
                  <td>{{ calificacion.calificacion }}</td>
                  <td>{{ calificacion.promedio_calificacion }}</td>
                  <td>{{ calificacion.critica }}</td>
                  <td>
                   <a class="btn btn-primary" href="EditCalificacion">Editar</a>
                   <button class="btn btn-danger" >Eliminar</button>
                     
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
    </div>
  </div>
  
</template>
<script>
import axios from 'axios' 
export default {
  data (){
    return{
      fields:[
        {key: 'nombre_titulo', label: 'Nombre'},
        {key: 'calificacion', label: 'Calificacion'},
        {key: 'promedio_calificacion', label: 'Promedio Calificacion'},
        {key: 'critica', label: 'Critica'},
        {key: 'acciones', label: ''},
      ],
      calificacion:[]
    }
  },
  methods:{
    getCalificacion(){
      const path = 'http://127.0.0.1:8000/peliculas/calificacion/'
      axios.get(path).then((response) => {
        this.calificacion = response.data
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },
  created(){
    this.getCalificacion();
  }
}
</script>
<style lang="css" scoped>
.titulo-list {
    color: #c97416;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16pt;
    font-weight: bold;
    margin-top: 15px;
}

.table {
    color: #ffffff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 12pt;
    border: 1px solid #c97416;
}

.button {
    color: #ffffff;
    background-color: #c96417;
    border-color: #c96417;
}
.col {
    color: #ffffff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 12pt;
}


</style>