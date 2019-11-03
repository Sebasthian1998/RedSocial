<template>
    <div>
    <h1>{{title}}</h1>
        <form action="" @submit.prevent="sendLogin">
            <div class="form-group">
                <label for="">
                    <input class="form-control" name="username" type="text" placeholder="Nombre de Usuario" v-bind:value="userlogin.username">
                </label>
            </div>
            <br/>
            <div>
                <label for="">
                    <input class="form-control" name="password" type="password" placeholder="Password" v-bind:value="userlogin.password">
                </label>
            </div>
            <br/>
            <button class="btn btn-primary" >Ingresar</button>
        </form>
        <div v-if="validator">
            <div v-if="login">
                <h1>Te  logeaste correctamente</h1>
            </div>
            <div v-else>
                <h1>Tu usuario o contraseña son incorrectos</h1>
            </div>
        </div>
    </div>
</template>
<script>
import {getUsers} from "../helpers/user"
export default {
    name: 'login',
    data(){
        return{
        title: 'Inicio de Sesión',
        validator:false,
        login:false,
        userlogin:{
            username:'',
            password:''
        },
        users: [],
        }
    },
    mounted(){
        
            getUsers().then(res=>{ //No deberia estar el mounted, deberia trabajarse con el backend para traer 1 solo registro y abajo 
                // validar con ese registro
                    this.users=res
                }) 
    },
    methods:{
        asignarNombreSesion(name){
            this.$session.set('name',name)
        },
        ruta(){
            this.$router.push('../principal')
        },
        sendLogin(e){this.validator=false
            this.validateData(e.target)
            this.validator=true
        },
        validateData(e){
            if(e.username.value==='' || e.password.value===''){
                this.login=false
            }else{
                let find=this.users.find(element=>{return element.name==e.username.value && element.password==e.password.value})
                find ? ( this.login=true, this.$session.set('logeado',true), this.ruta(),
                    this.asignarNombreSesion(e.username.value)
                ) : (this.login=false) //para mostrar el mensaje, arriba validar si existe el elemento       
            }
        }
    }
}
</script>