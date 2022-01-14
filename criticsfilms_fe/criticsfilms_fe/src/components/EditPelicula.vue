<template lang="html">  
    <div class="container">
        <div class="row">
            <div class="col text-left">
                <h2> Editar pelicula</h2>  
                
            </div>
            <div class="row">
                <div class= "col">
                    <div class= "card">
                        <div class= "card-body">
                            <form @submit="onSubmit">

                                <div class="form-group row">
                                    <label for="nombre_titulo" class="col-sm-2 col-form-label">Titulo</label>
                                    <div class="col-sm-6">
                                        <input type="text" placeholder="Titulo" name="nombre_titulo" class=" form-control" v-model.trim="form.nombre_titulo">
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="sinopsis" class="col-sm-2 col-form-label">Sinopsis</label>
                                    <div class="col-sm-6">
                                        <textarea name="sinopsis" class="form-control" placeholder="Sinopsis" rows="3" v-model.trim="form.sinopsis"></textarea>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="director" class="col-sm-2 col-form-label">Director</label>
                                    <div class="col-sm-6">
                                        <input type="text" placeholder="Director" name="director" class=" form-control" v-model.trim="form.director">
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="casting" class="col-sm-2 col-form-label">Casting</label>
                                    <div class="col-sm-6">
                                        <input type="text" placeholder="Casting" name="casting" class=" form-control" v-model.trim="form.casting">
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="genero" class="col-sm-2 col-form-label">Genero</label>
                                    <div class="col-sm-6">
                                        <input type="text" placeholder="Genero" name="genero" class=" form-control" v-model.trim="form.genero">
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="año" class="col-sm-2 col-form-label">Año</label>
                                    <div class="col-sm-6">
                                        <input type="number" placeholder="Año" name="año" class=" form-control" v-model.trim="form.año">
                                    </div>
                                </div>
                                
                                <div class="rows">
                                    <div class="col text left">
                                        <button type="submit" variant="primary">Editar</button>
                                        <a type="submit" class="btn-large-space" href="/pelicula">Cancelar</a>
                                    </div>

                                </div>
                                
                                
                            </form>

                        </div>
                    </div>
                </div>
            </div>    
        </div>
    </div> 
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'
export default {
    data() {
        return {
            id_pelicula: this.$route.params.id_pelicula,
            form: {
                nombre_titulo:'',
                sinopsis:'',
                director:'',
                casting:'',
                genero:'',
                año:'',
            }
        }
    },
    methods: {
        onSubmit(evt){
            evt.preventDefault()

            const path = `http://127.0.0.1:8000/peliculas/pelicula/${this.id_pelicula}/`

            axios.put(path, this.form).then((response) => {

                this.form.nombre_titulo = response.data.nombre_titulo
                this.form.sinopsis = response.data.sinopsis
                this.form.director = response.data.director
                this.form.casting = response.data.casting
                this.form.genero = response.data.genero
                this.form.año = response.data.año


                swal("Pelicula editada correctamente", "","success")


            })
            .catch((error) => {
                console.log(error)
            })
        },


        getPelicula (){
            const path = `http://127.0.0.1:8000/peliculas/pelicula/${this.id_pelicula}/`

            axios.get(path).then((response) => {

                this.form.nombre_titulo = response.data.nombre_titulo
                this.form.sinopsis = response.data.sinopsis
                this.form.director = response.data.director
                this.form.casting = response.data.casting
                this.form.genero = response.data.genero
                this.form.año = response.data.año
            })
            .catch((error) => {
                console.log(error)
            })
        }

    },
    created(){
        this.getPelicula()
        
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

.card {
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

.btn-large-space {
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