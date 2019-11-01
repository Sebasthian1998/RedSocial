<template>
  <div id="app">
   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <div id="nav" class="navbar fixed-top navbar-dark bg-success"> 
      <router-link to="/"><a class="navbar-brand">Home</a></router-link>
      <div v-if="logeado">
        <router-link to="/publication"><a class="navbar-brand">Publicaciones</a></router-link>
        <router-link to="/users"><a class="navbar-brand">Usuarios</a></router-link>
        <router-link to="/principal"><a class="navbar-brand">Pagina Principal</a></router-link>
        <span>Bienvenido {{name}}</span>
        <button class="btn btn-danger" @click="logout()">SALIR</button>
      </div>

     <!-- <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
          <h5 class="text-white h4">Collapsed content</h5>
          <span class="text-muted">Toggleable via the navbar brand.</span>
        </div>
      </div>
      <nav class="navbar navbar-dark bg-sucess">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav> -->
      </div>   
   
    <img src="./assets/unmsm.jpg">
    <router-view/>
    <footer><footerr></footerr></footer>

    
  </div>
</template>
<script>
import Footerr from './components/footer'
import Menu from './views/menu'
export default {
  name: 'app',
  components:{
    Menu,Footerr
  },
  data () {
    return {
      logeado: false,
      name: 'usuario'
    }
  },
  mounted(){
    if(!this.$session.get('logeado')){
      this.$session.set('logeado',false)
    }
  },
  beforeUpdate(){
    this.logeado=this.$session.get('logeado')
    this.name=this.$session.get('name')
  },
  destroyname(){
    this.$session.remove('name')
  },
  methods:{
    logout(){
      console.log('cerraste sesion')
      this.$session.set('logeado',false)
      this.$router.push('./')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  height: 100%;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #2cd88b;
}
#nav a.router-link{
  color:rgb(8, 109, 109);
}
#nav a.router-link-exact-active{
  color:#23e754
}
footer {
    width:100%;
    height:100px;
    bottom:0;
    left:0;
}
</style>
