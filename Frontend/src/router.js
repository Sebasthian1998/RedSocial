import Vue from 'vue'
import Router from 'vue-router'
import publication from './views/publications.vue'
import user from './views/users.vue'
import home from './views/home.vue'
import principal from './views/principal.vue'
Vue.use(Router)
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes:[
        {
            path:'/',
            name:'home',
            component:home
        },
        {
            path:'/users',
            name:'users',
            component: user
        },
        {
            path:'/publication',
            name: 'publication',
            component: publication
        },
        {
            path:'/principal',
            name:'principal',
            component:principal
        }
    ]
})