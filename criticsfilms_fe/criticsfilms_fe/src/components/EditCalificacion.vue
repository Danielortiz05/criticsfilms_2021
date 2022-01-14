<template lang="html">  
    <div class="container">
        <div class="row">
            <div class="col text-left">
                <h2> Editar calificacion</h2>  
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
                                    <label for="calificacion" class="col-sm-2 col-form-label">Calificacion</label>
                                    <div class="col-sm-6">
                                        <input type="number" placeholder="Calificacion" name="calificacion" class=" form-control" v-model.trim="form.calificacion">
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="promedio_calificacion" class="col-sm-2 col-form-label">Promedio Calificacion</label>
                                    <div class="col-sm-6">
                                        <input type="float" placeholder="Promedio Calificacion" name="promedio_calificacion" class=" form-control" v-model.trim="form.promedio_calificacion">
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="critica" class="col-sm-2 col-form-label">Critica</label>
                                    <div class="col-sm-6">
                                        <input type="text" placeholder="Critica" name="critica" class=" form-control" v-model.trim="form.critica">
                                    </div>
                                </div>
                                <div class="rows">
                                    <div class="col text left">
                                        <button type="submit" variant="primary">Editar</button>
                                        <a type="submit" class="btn-large-space" href="/pelicula/calificacion">Cancelar</a>
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
            id: this.$route.params.id,
            form: {
                nombre_titulo:'',
                calificacion:'',
                promedio_calificacion:'',
                critica:'',
            }
        }
    },
    methods: {
        onSubmit(evt){
            evt.preventDefault()

            const path = `http://127.0.0.1:8000/peliculas/calificacion/${this.id}/`

            axios.put(path, this.form).then((response) => {

                this.form.nombre_titulo = response.data.nombre_titulo
                this.form.calificacion = response.data.calificacion
                this.form.promedio_calificacion = response.data.promedio_calificacion
                this.form.critica = response.data.critica
                
                swal("Calificacion editada correctamente", "","success")


            })
            .catch((error) => {
                console.log(error)
            })
        },


        getCalificacion (){
            const path = `http://127.0.0.1:8000/peliculas/calificacion/${this.id}/`

            axios.get(path).then((response) => {

                this.form.nombre_titulo = response.data.nombre_titulo
                this.form.calificacion = response.data.calificacion
                this.form.promedio_calificacion = response.data.promedio_calificacion
                this.form.critica = response.data.critica
            })
            .catch((error) => {
                console.log(error)
            })
        }

    },
    created(){
        this.getCalificacion()
        
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