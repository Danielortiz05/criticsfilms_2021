<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col">
                <h3>¿Estas seguro de eliminar esta Calificacion?</h3>

                <p>Titulo : {{ this.element.nombre_titulo }}</p>
                <p>Calificacion : {{ this.element.calificacion }}</p>
                <p>Promedio Calificacion : {{ this.element.promedio_calificacion }}</p>
                <p>Critica : {{ this.element.critica }}</p>

            </div>

        </div>
        <div class="row">
            <div class="col">
                <button v-on:click="deleteCalificacion" variant="danger">Eliminar</button>
            </div>
        </div> 

    </div>
     

</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';
export default {
    data() {
        return {
            id: this.$route.params.id,
            element: {
                nombre_titulo: '',
                calificacion: '',
                promedio_calificacion: '',
                critica: '',
            },
        }
    },
    methods:{
        getCalificacion (){
            const path = `http://127.0.0.1:8000/peliculas/calificacion/${this.id}/`

            axios.get(path).then((response) => {

                this.element.nombre_titulo = response.data.nombre_titulo
                this.element.calificacion = response.data.calificacion
                this.element.promedio_calificacion = response.data.promedio_calificacion
                this.element.critica = response.data.critica
            })
            .catch((error) => {
                console.log(error)
            })
        },
        deleteCalificacion(){
            const path = `http://127.0.0.1:8000/peliculas/calificacion/${this.id}/`
            axios.delete(path).then((response) => {
                location.href = '/pelicula/calificacion'
            })
            .catch((error) => {
                swal('No se pudo eliminar la calificacion', '','error')
            })
        }
            
    },
    created(){
        this.getCalificacion()
    },
    
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

.container {
    background: #212529;
    color: #ffffff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 13pt;
    font-weight: bold;
    border: none;
}

.col-sm-6 {
    color: #000000;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 13t;
}

.form-control {
    border: 1px solid #c97416;
    margin-bottom: 5px;
}

.primary {
    margin-left: 5px;
    background: #c97416;
    color: #ffffff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 13pt;
    border: none;
    border-radius: 2px;
}

button {
    background: #c97416;
    color: #ffffff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 13pt;
    border: none;
    border-radius: 2px;
}

</style>