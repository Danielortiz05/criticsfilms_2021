import { createRouter, createWebHistory } from "vue-router";
import Router from 'vue-router'
import ListPelicula from '@/components/ListPelicula';
import EditPelicula from '@/components/EditPelicula';
import DeletePelicula from '@/components/DeletePelicula';
import NewPelicula from '@/components/NewPelicula';
import ListCalificacion from '@/components/ListCalificacion';
import EditCalificacion from '@/components/EditCalificacion';
import DeleteCalificacion from '@/components/DeleteCalificacion';
import NewCalificacion from '@/components/NewCalificacion';
import Home from '@/components/Home';
import LogIn from '@/components/LogIn.vue'
import SignUp from '@/components/SignUp.vue'
import Amelie from '@/components/Amelie.vue'
import StarWars4 from '@/components/StarWars4.vue'
import StarWars5 from '@/components/StarWars5.vue'
import Lavidaesbella from '@/components/Lavidaesbella.vue'
import Dracula from '@/components/Dracula.vue'
import Encanto from '@/components/Encanto.vue'
const routes = [
        {
            path:'/',
            name:'Home',
            props:true,
            component: Home
        },
       
        {
            path: '/login',
            name: 'LogIn',
            component: LogIn
           },
           {
            path: '/signup',
            name: 'SignUp',
            component: SignUp
           },
        {   
            path:'/pelicula',
            name:'ListPelicula',
            props:true,
            component: ListPelicula
        },
        {
            path:'/pelicula/:id_pelicula/edit',
            name:'EditPelicula',
            props: true,
            component: EditPelicula
        },
        {
            path:'/pelicula/:id_pelicula/delete',
            name:'DeletePelicula',
            props: true,
            component: DeletePelicula  
        },
        {
            path:'/pelicula/new',
            name:'NewPelicula',
            props: true,
            component: NewPelicula  
        },
        {
            path:'/pelicula/calificacion',
            name:'ListCalificacion',
            props: true,
            component: ListCalificacion 
        },
        {
            path:'/pelicula/calificacion/:id/edit',
            name:'EditCalificacion',
            props: true,
            component: EditCalificacion 
        },
        {
            path:'/pelicula/calificacion/:id/delete',
            name:'DeleteCalificacion',
            props: true,
            component: DeleteCalificacion  
        },
        {
            path:'/pelicula/calificacion/new',
            name:'NewCalificacion',
            props: true,
            component: NewCalificacion 
        },
        {
            path:'/amelie',
            name:'amelie',
            props:true,
            component: Amelie
        },
        {
            path:'/sw4',
            name:'StarWars4',
            props:true,
            component: StarWars4
        },
        {
            path:'/sw5',
            name:'StarWars5',
            props:true,
            component: StarWars5
        },
        {
            path:'/lavidaesbella',
            name:'Lavidaesbella',
            props:true,
            component: Lavidaesbella
        },
        {
            path:'/dracula',
            name:'Dracula',
            props:true,
            component: Dracula
        },
        {
            path:'/encanto',
            name:'Encanto',
            props:true,
            component: Encanto
        },
        
    ];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;





