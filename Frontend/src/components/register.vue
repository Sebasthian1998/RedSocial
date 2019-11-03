<template>
    <div class="">
    <h1>{{title}}</h1>
    <form action="" @submit.prevent="sendRegister">
        <div class="form-group">
        <label for="">
            <input class="form-control" name="usernameregister" type="text" placeholder="Nombre">
        </label>
        </div>
        <div class="form-group">
        <label for="">
            <input id="email" class="form-control" name="email" type="email" placeholder="Correo institucional">
        </label>
        </div>
        <div class="form-group">
        <label for="">
            <input @keyup="validateEqualCORREO" class="form-control" name="emailrep" type="email" placeholder="Confirme correo">
        </label>
        </div>
        <p v-show="messagerep.correo">Los 2 correos deben ser iguales</p>
         <div class="form-group">
        <label for="">
            <input class="form-control" name="celular" type="text" placeholder="Celular">
        </label>
         </div>
        <div class="form-group">
        <label for="">
            <input  id="password" class="form-control" name="passwordregister" type="password" placeholder="Password institucional">
        </label>
        </div>
        <div class="form-group">
        <label for="">
            <input @keyup="validateEqualPASS" class="form-control" name="passwordrep" type="password" placeholder="Confirme contraseña">
        </label>
        </div>
        <p v-show="messagerep.pass">Las contraseñas deben coincidir</p>
        
        <button @click.prevent="mostrarContrasena" class="btn btn-success">Mostrar Contraseña</button>
        <!-- <br/>
        <label for="">Sube tu avatar
            <input type="file">
        </label>-->
        
        
        <div v-if="validatorr">
            <div v-if="register">
                <h1>Te  registraste correctamente</h1>
            </div>
            <div v-else>
                <p>{{message}}</p>
            </div>
        </div>
        
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
        usersr: [],
        message: 'Vuelva a escribir sus datos',
        messagerep:{
            correo:false,
            pass:false
        }  
        }
    },
    mounted(){
        getUsers().then(res=>{ //No deberia estar el mounted, deberia trabajarse con el backend para traer 1 solo registro y abajo 
                // validar con ese registro
            this.usersr=res
        }) 
    },methods:{
        mostrarContrasena(){
            var tipo = document.getElementById("password");
            if(tipo.type == "password"){
                tipo.type = "text";
            }else{
                tipo.type = "password";
            }
        },
        crearUser(name,password,email,phone){
            const Url='http://44.226.29.163:3000/api'
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
            this.validateDataR(e.target)//envia todo el formulario
            this.validatorr=true
            
        },
        validateemail(email){
            if(email.length<17 || !email.endsWith('@unmsm.edu.pe')){
                return false
            }else {
                return true
            }
        },
        validatecel(celular){
            let regex=/^9/
            let match=regex.test(celular)
            if(!match){
                return false
            }else return true
        },
        validatepass(password){
            // let regex=
            // let match=regex.test()

            if(password.length<8 ){
                return false
            }else {return true}
        },
        validateEqualCORREO(e){
            let input = e.target.value,
            email=document.getElementById('email').value
            if(email.length>0){
                if(email!=input){
                    this.messagerep.correo=true
                }else this.messagerep.correo=false
                console.log(this.messagerep.correo,'CORREOs')
            }
        },validateEqualPASS(e){
            let input = e.target.value,
            password=document.getElementById('password').value
            if(password.length>0){
                        if(password!=input){
                            this.messagerep.pass=true
                        }else  this.messagerep.pass=false
                        console.log(this.messagerep.pass,'PASS')
                        }
        },validateDataR(e){
            let regex=/^9[0-9]{8}$/
            let match=regex.test(e.celular.value)
            if(!match){ 
                this.register=false, this.message="Formato de celular incorrecto, 9 digitos, comienza con 9" }
            else if(e.usernameregister.value=='' && e.passwordregister.value==''){
                this.register=false, this.message="Rellene los demas campos"
            }else{
                let find=this.usersr.find(element=>{
                return element.name==e.usernameregister.value && element.password==e.passwordregister.value})
                find ? (this.register=false, this.message="Este usuario ya existe")  //Si encuentra el elemento no puede registrarse
                 :(this.validateemail(e.email.value) && this.validatepass(e.passwordregister.value) ?      
                        (this.register=true,
                            this.asignarNombreSesion(e.usernameregister.value),
                            this.$session.set('logeado',true), 
                            this.crearUser(e.usernameregister.value,e.passwordregister.value,e.email.value,e.celular.value),
                            this.ruta()
                        )  
                        :this.register=false, this.message="La base del correo debe tener más de 6 caracteres y el password debe tener como minimo 8 ejemplo usuario@unmsm.edu.pe")
                //para mostrar el mensaje, arriba validar si existe el elemento         
            }
        }
    }
}
</script>