/**
 * 路由文件
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/home',
            name: 'Home',
            component: resolve => require(['@/views/home/index.vue'], resolve),
            meta: {
                title: '首页'
            },
            props: (route) => (route.query)
        }
    ]
})

export default router
