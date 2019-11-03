<template>
    <div>
    <h1>{{title}}</h1>
    <div class="container">
    <table class="table table-dark">
        <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Agregar a amigos</th>
        </tr>
        <tr v-for="user in users" :key="user._id">
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>
            <td><button class="btn btn-primary">Agregar</button></td>
        </tr>
        
    </table>
    </div>
    <img src="https://miro.medium.com/max/670/1*hSNpnHADLYF0BXbWJejZCA.jpeg" alt="">
    </div>
</template>

<script>
class User{
    constructor(Name = '', phone = '',perfil='') {
    this.Name = Name;
    this.phone = phone;
    this.perfil=perfil;
  }
}
import {getPerfil} from "../helpers/perfils"
import {getUsers} from "../helpers/user"
export default {
    name: "user",
    data(){
        return{
            title: "Pagina de Usuarios",
            newuser: new User(),
            users: []
        } 
    },
    mounted(){
        this.getUsersVue()
    },
    methods:{
         getUsersVue(){
            let newuser= new User()
            //getPerfil()
            getUsers().then(res=>{
                this.users=res
                //console.log(this.users)
            })   
        }
    }
}
</script>
