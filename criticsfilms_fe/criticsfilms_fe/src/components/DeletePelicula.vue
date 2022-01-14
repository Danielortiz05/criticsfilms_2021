<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col">
                <h3>¿Estas seguro de eliminar esta pelicula?</h3>

                <p>Titulo : {{ this.element.nombre_titulo }}</p>
                <p>Sinopsis : {{ this.element.sinopsis }}</p>
                <p>Director : {{ this.element.director }}</p>
                <p>Casting : {{ this.element.casting }}</p>
                <p>Genero : {{ this.element.genero }}</p>
                <p>Año : {{ this.element.año }}</p>

            </div>

        </div>
        <div class="row">
            <div class="col">
                <button v-on:click="deletePelicula" variant="danger">Eliminar</button>
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
            id_pelicula: this.$route.params.id_pelicula,
            element: {
                nombre_titulo: '',
                sinopsis: '',
                director: '',
                casting: '',
                genero: '',
                año: '',
            },
        }
    },
    methods:{
        getPelicula (){
            const path = `http://127.0.0.1:8000/peliculas/pelicula/${this.id_pelicula}/`

            axios.get(path).then((response) => {

                this.element.nombre_titulo = response.data.nombre_titulo
                this.element.sinopsis = response.data.sinopsis
                this.element.director = response.data.director
                this.element.casting = response.data.casting
                this.element.genero = response.data.genero
                this.element.año = response.data.año
            })
            .catch((error) => {
                console.log(error)
            })
        },
        deletePelicula(){
            const path = `http://127.0.0.1:8000/peliculas/pelicula/${this.id_pelicula}/`
            axios.delete(path).then((response) => {
                location.href = '/pelicula'
            })
            .catch((error) => {
                swal('No se pudo eliminar la pelicula', '','error')
            })
        }
            
    },
    created(){
        this.getPelicula()
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