<template lang="html">  
    <div class="container">
        <div class="row">
            <div class="col text-left">
                <div class="col">
                    <h3> Listado de peliculas</h3>  
                    <a type="submit" size="sm" href="/pelicula/new" variant="Primary" >
                        Agregar Nueva Pelicula 
                    </a>
                
                </div>
                <br>
                <pics>       
        
       <a href="../amelie"> <img src="../assets/amelie.jpg"> </a> 
       
        <a href="../sw4"> <img src="../assets/sw4.jpg"> </a> 
        <a href="../sw5"> <img src="../assets/sw5.jpg"> </a> 
          <a href="../lavidaesbella"> <img src="../assets/lveb.jpg"> </a> 
        <a href="../dracula"> <img src="../assets/dracula.jpg"> </a>
        <a href="../encanto"> <img src="../assets/encanto.jpg"> </a> 

    </pics> 
            </div>
        </div>
    </div> 
</template>

<script>
import EditPelicula from "@/components/EditPelicula.vue"
import axios from 'axios'
    

export default {
    
    data () {
    
        return{
            fields: [
                { key: 'id_pelicula', label:'Id'},
                { key: 'nombre_titulo', label: 'Titulo' },
                { key: 'sinopsis', label: 'Sinopsis' },
                { key: 'director', label: 'Director' },
                { key: 'casting', label: 'Casting' },
                { key: 'genero', label: 'Genero' },
                { key: 'año', label: 'Año' },
                { key: 'action', label: 'Acción' }
            ],
            pelicula: []
        }
    },
    methods: {

        getPelicula(){
            const path = 'http://127.0.0.1:8000/peliculas/pelicula/'
            axios.get(path).then((response) => {
                this.pelicula = response.data
            })
            .catch((error) => {
                console.log(error)
            })
        }
    },
    created (){
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
.submit{
color: #ffffff;
    background-color: #c96417;
    border-color: #c96417;
}
</style>