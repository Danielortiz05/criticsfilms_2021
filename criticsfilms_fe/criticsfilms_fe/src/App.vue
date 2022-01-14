<template>
  <div id="app" class="app">
     <div class="main-component">

       <header id="header">
          <div class="container-fluid">
            <nav class="navbar navbar-expand-lg navbar header">
                <a class="navbar-brand" href="#">
                  <img v-bind:src="require('./assets/logo.png')" alt="CriticsFilms logo">
                </a>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="/">INICIO</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/pelicula">FILMS</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/pelicula/calificacion">CALIFICACIONES</a>
                    </li>
                      <div class="botonlogin">
            <button class ="btn btn-outline-success"   v-if="!is_auth" v-on:click="loadLogIn" > Ingresa </button>
           </div>   
        <div>
            <button class ="btn btn-outline-success" v-if="!is_auth" v-on:click="loadSignUp" > Registrate </button>
        </div>
        <div>
            <button class ="btn btn-outline-success" v-if="is_auth" v-on:click="Salir"> Salir</button>
        </div>
                </ul>
               
                
              </div>
       
        
       
       
            </nav>
          </div>
        </header>
      <router-view
    v-on:completedLogIn="completedLogIn"
    v-on:completedSignUp="completedSignUp"
 > </router-view>
      <!-- Footer -->
      <div class="container-fluid">
        <footer class="nav justify-content-center border-top pb-3 mb-3">
            <a class="list" href="#">
              <img v-bind:src="require('./assets/facebook.png')" href="#">
              <img v-bind:src="require('./assets/twitter.png')" href="#">
              <img v-bind:src="require('./assets/instagram.png')" href="#">
              <img v-bind:src="require('./assets/youtube.png')" href="#">      
            </a>
            <div class="container-fluid">
              <p class="text-center">© 2021 CriticsFilms</p>
            </div>
          </footer>
      </div>
    </div>
  </div>   

</template>

<script>
export default{
 name: 'App',
 data: function(){
     return{
         is_auth: false,
     }
 },
  components: {
 },
 methods:{
   irInicio: function(){
       this.$router.push({name: "Home"})
   },
 verifyAuth: function() {
 this.is_auth = localStorage.getItem("isAuth") || false;
 
 if (this.is_auth == false)
 this.$router.push({ name: "logIn" });
 else
 this.$router.push({ name: "Home" });
 },
loadSignUp: function(){
 this.$router.push({name: "SignUp"})
 },
 loadLogIn: function(){
 this.$router.push({name: "LogIn"})
 },
 
completedLogIn: function(data) {
   localStorage.setItem("isAuth", true);
 localStorage.setItem("username", data.username);
 localStorage.setItem("user_id", data.user_id);
 localStorage.setItem("token_access", data.token_access);
 localStorage.setItem("token_refresh", data.token_refresh);
 alert("Autenticación Exitosa");
 this.verifyAuth();
   this.$router.push({name: "Home"})  
},
 completedSignUp: function(data) {
     alert("Registro Exitoso",data);
 this.completedLogIn(data);
 },
  Salir: function(){
     this.is_auth=false;
    localStorage.clear();
 this.$router.push({name: "LogIn"})  
},
 created: function(){
 this.verifyAuth()
},
 }


}

</script>
<style>
body {
  background: #212529;
}

.header img {
  
  width: 50%;
}

.nav-item {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 14pt;
  font-weight: bold;
  margin-left: 90px;
  }

.nav-item:active {
  color: #c96417;
}

.nav-link {
  color:#ffffff;
}

.nav-link:hover {
  color: #c96417;
}

.form-control {
  color: #212529;
  width: 414px;
}

.btn-outline-success {
  color: #ffffff;
  background-color: #c96417;
  border-color: #c96417;
}

.header nav button{
   
  color: #ffffff;
  background-color: #c96417;
  border-color: #c96417;
}


.btn-outline-success:hover {
  color: #c96417;
  background-color: #ffffff;
  border-color: #ffffff;
}

footer {
  align-items: center;
}

.text-center {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 12pt;
  color:#ffffff;
  margin-top: 5px;
  margin-left: 15px;
}

.list img {
  margin-top: 10px;
  margin-left: 15px;
}

</style>