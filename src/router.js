import Vue from 'vue';
import Router from 'vue-router'
import Welcome from './views/Welcome.vue'
import Home from './views/Home.vue'
import Myinfo from './views/Myinfo.vue'
import listContent from './components/listContent.vue'

Vue.use(Router);

export default new Router({
    mode:"hash",
    routes: [
        {
            path: '/',
            name: 'welcome',
            component: Welcome,
        },
        { 
        path: '/welcome', 
        name: 'welcome',
        component: Welcome 
        },
        {
        path: '/home/:name', 
        name: 'home',
        component: Home,
        props: true,
        children:[
        {
            path: 'listContent',
            name: 'listContent',
            component: listContent
        },
        {
            path: 'myinfo',
            name: 'Myinfo',
            component: Myinfo,
            props:true,
        }
        ]
        }
      ]
})