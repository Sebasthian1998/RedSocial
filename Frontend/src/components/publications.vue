<template>
<div>
    <h1>{{title}}</h1>
    <div v-for="publication in publications" :key="publication.id" >
        <li>{{publication.description}}</li>
         <li>{{publication.user.name}}</li>
    </div>
    <img src="http://colegiojoseescandon.es/wp-content/uploads/2018/08/publicaciones.png" alt="">
</div>
</template>


<script>
import {getPublications,postPublication,getPublication} from "../helpers/publication"
    
class Publication {
  constructor(Username = '', description = '',reaccion='') {
    this.Username = Username;
    this.description = description;
    this.reaccion=reaccion;
  }
}

export default {
    name: "publication",
    data(){
        return{
        publicacion: new Publication(),
        publications: [],
        title: 'Pagina de Publicaciones'
        }
    },
    mounted(){
        this.getPublicationsVue()
    },
    methods:{
        getPublicationsVue(){

            getPublications().then(res=>{this.publications=res; 
            //console.log(this.publications)
            })
            
        }
    }
}
</script>
