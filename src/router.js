import Vue from 'vue';
import Router from 'vue-router'
import Welcome from './views/Welcome.vue'
import Home from './views/Home.vue'
import todolist from './components/todolist.vue'
import MyHeader from './components/Header.vue'

Vue.use(Router);

export default new Router({
    mode:"hash",
    routes: [
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
            path: 'todolist',
            name: 'todolist',
            component: MyHeader
        },
        {
            path: 'profile',
            name: 'profile',
            component: todolist
        }
        ]
        }
      ]
})