<template>
<div>
    <!--<principal></principal>-->
     <!--<user></user>-->
    <div v-if="!this.$session.get('logeado')">
      <div class="container">
        <div class="row">
            <div class="col">
              <register></register>  
            </div>
            <div class="col">
              <login></login>
            </div>
        </div>
    </div>
    </div>
</div>
</template>
<script>
import Menu from './menu'
import Login from "../components/login";
import Register from "../components/register"
import Principal from "./principal"
export default {
    name:'Home',
    components:{
        Principal,Login,Register,Menu
    }
}
</script>