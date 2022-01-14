<template>
<div class="signUp_user">
<div class="container_signUp_user">
<h2>Registrarse</h2>
<form v-on:submit.prevent="processSignUp" >
<input type="text" v-model="user.username" placeholder="Usuario">
<br>
<input type="password" v-model="user.password" placeholder="Contraseña">
<br>
<input type="text" v-model="user.name" placeholder="Nombre">
<br>
<input type="email" v-model="user.email" placeholder="Correo electrónico">
<br>
<br>
<button type="submit">Registrarse</button>
</form>
<br>
<br><br>
<br>
</div>
</div>
</template>
<script>
import gql from "graphql-tag";
export default {
name: "SignUp",
data: function() {
return {
user: {
username: "",
password: "",
name: "",
email: "",

 },
 };
 },
methods: {
processSignUp: async function() {
    await this.$apollo
 .mutate({
mutation: gql`
 mutation($userInput: SignUpInput!) {
 signUpUser(userInput: $userInput) {
 refresh
 access
 }
 }
 `,
variables: {
userInput: this.user,
 },
 })
 .then((result) => {
let dataLogIn = {
username: this.user.username,
token_access: result.data.signUpUser.access,
token_refresh: result.data.signUpUser.refresh,
 };
this.$emit("completedSignUp", dataLogIn);
 })
 .catch((error) => {
alert("ERROR: Fallo en el registro.");
 });
 },
 },
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

button {
    background: #c97416;
    color: #ffffff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 13pt;
    border: none;
    border-radius: 2px;
    margin-left: auto;
    margin-right: auto;
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
.signUp_user{
    margin: 0;
    padding: 0%;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
 }
 .container_signUp_user {

 width: 50%;
 height: 99%;
 
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 
}
.signUp_user h2{
 color: #c97416;
 }
 .signUp_user form{
 width: 70%;
 
}
 .signUp_user input{
 height: 40px;
 width: 100%;
 box-sizing: border-box;
 padding: 10px 20px;
 margin: 5px0;
 border: 1px solid #283747;
 }
</style>