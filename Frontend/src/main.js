import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSessionStorage from 'vue-sessionstorage'
Vue.use(VueSessionStorage)
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
