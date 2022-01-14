<template>
<div class="logIn_user">
<div class="container_logIn_user">
    <br>
    <br>
<h2>Iniciar sesión</h2>
<br>

<form v-on:submit.prevent="processLogInUser" >
<input type="text" v-model="user.username" placeholder="Usuario">
<br>
<input type="password" v-model="user.password" placeholder="Contraseña">
<br>
<br>
<button class="boton" type="submit">Iniciar Sesión</button>
</form>
<br>
<br><br>
<br>
</div>
<br>
<br>
</div>
</template>
<script>
import gql from "graphql-tag";
export default {
name: "LogIn",
data: function() {
return {
user: {
username: "",
password: "",
 },
 };
 },
methods: {
processLogInUser: async function() {
await this.$apollo
 .mutate({
mutation: gql`
 mutation($credentials: CredentialsInput!) {
 logIn(credentials: $credentials) {
 refresh
 access
 }
 }
 `,
variables: {
credentials: this.user,
 },
 })
 .then((result) => {
let dataLogIn = {
username: this.user.username,
token_access: result.data.logIn.access,
token_refresh: result.data.logIn.refresh,
 };
this.$emit("completedLogIn", dataLogIn);
 })
 .catch((error) => {
alert("ERROR 401: Credenciales Incorrectas.");
 });
 },
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
.logIn_user{
 margin: 0;
 padding: 0%;
 height: 100%;
 width: 100%;
 
 display: flex;
 justify-content: center;
 align-items: center;
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
    font-size: 20pt;
    border: none;
    border-radius: 2px;
}

button {
    align-content: center;
    background: #c97416;
    color: #ffffff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 13pt;
    border: none;
    border-radius: 2px;
    display: flex;
 justify-content: center;
 align-items: center;
}
button:hover {
    background: #ffffff;
    color: #c97416;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 13pt;
    border: none;
    border-radius: 2px;
}
.col{
    color: #ffffff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 13pt;
}
 .container_logIn_user {
 
 width: 95%;
 height: 60%;
 
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 }

.logIn_user h2{
justify-content: center;
 align-items: center;
 color: #c97416;
 }
.logIn_user form{
 width: 20%;
 justify-content: center;
 align-items: center;
 
 }
 .logIn_user input{
 height: 45px;
 width: 100%;
 box-sizing: border-box;
 padding: 10px 20px;
 margin: 5px 0;
 border: 1px solid #283747;
 }


</style>