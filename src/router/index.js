import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login'
import notPage from '../views/404'
import Layout from '../views/layout/index'

Vue.use(VueRouter)

const routes = [
    {
        path:'/login',
        name:'login',
        component:login
    },
]

const router = new VueRouter({
    // mode: 'history',
    // base: process.env.BASE_URL,
    routes
})
/**
 * dynamicRoutes是动态路由，第一个path='',是有用处的，
 * 在动态匹配的时候，会把匹配到的路由插到children当中
 * 最后一个是404页面，需要放在最后
 */
export const dynamicRoutes = [
    {
        path:'',
        component:Layout,
        name: 'container',
        children:[

        ]
    },
    {
        path: '*',
        component: notPage
    }
]

export default router