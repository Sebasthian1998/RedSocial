<template>
    <div class="">
    <h1>{{title}}</h1>
    <form action="" @submit.prevent="sendRegister">
        <div class="form-group">
        <label for="">
            <input class="form-control" name="usernameregister" type="text" placeholder="Usuario">
        </label>
        </div>
        <div class="form-group">
        <label for="">
            <input  class="form-control" name="passwordregister" type="password" placeholder="Password">
        </label>
        </div>
        <div class="form-group">
        <label for="">
            <input  class="form-control" name="email" type="email" placeholder="Email">
        </label>
        </div>
        <!-- <br/>
        <label for="">Sube tu avatar
            <input type="file">
        </label>-->
        
        <label for="">
            <input class="form-control" name="celular" type="text" placeholder="Celular">
        </label>
        <div v-if="validatorr">
            <div v-if="register">
                <h1>Te  registraste correctamente</h1>
            </div>
            <div v-else>
                <h1>Vuelve a escribir tus datos</h1>
            </div>
        </div>
        <br/>
        <button class="btn btn-primary" >Registrarse</button>
    </form>
    
    </div>
</template>
<script>
import {getUsers} from "../helpers/user"
import axios from 'axios'
export default {
    name: 'register',
    data(){
        return{
        title: 'Registro',
        validatorr: false,
        register: false,
        usersr: []     
        }
    },
    mounted(){
        getUsers().then(res=>{ //No deberia estar el mounted, deberia trabajarse con el backend para traer 1 solo registro y abajo 
                // validar con ese registro
            this.usersr=res
            
        }) 
    },methods:{
        crearUser(name,password,email,phone){
            const Url='http://localhost:3000/api'
            axios.post(Url+'/users',{
            name,
            password,
            email,
            phone
        })
        .then(res=> {
            console.log(res)
            let data=res.data.data
            //console.log(data)
        })  
        },
        asignarNombreSesion(name){
            this.$session.set('name',name)
        },
        ruta(){
            this.$router.push('../principal')
        },
        sendRegister(e){
            this.validateDataR(e.target)
            this.validatorr=true
            
        },
        validateemail(){
            
        },
        validatepass(password){
            if(password.length<8){
                return false
            }else {return true}
        },
        validateDataR(e){
            let regex=/\d/
            let match=regex.exec(e.celular.value)
            if(!match || e.celular.value.length<9){ this.register=false}
            else if(e.usernameregister.value=='' || e.passwordregister.value==''|| e.celular.value==''){
                this.register=false
            }else{
                let find=this.usersr.find(element=>{return element.name==e.usernameregister.value && element.password==e.passwordregister.value})
                find ? this.register=false : 
                (this.register=true,this.asignarNombreSesion(e.usernameregister.value),
                            this.$session.set('logeado',true), 
                            this.crearUser(e.usernameregister.value,e.passwordregister.value,e.email.value,e.celular.value),
                            this.ruta() 
                            )
                //para mostrar el mensaje, arriba validar si existe el elemento         
            }
        }
    }
}
</script>