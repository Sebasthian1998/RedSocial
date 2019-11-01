<template>
    <div>
    <h1>{{title}}</h1>
    <ul v-for="user in users" :key="user._id">
        <li>{{user.name}}</li>
        <li>{{user.phone}}</li>
    </ul>
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
                console.log(this.users)
            })   
        }
    }
}
</script>
