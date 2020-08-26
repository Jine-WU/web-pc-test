import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/views/home'),
            props: (route) => (route.query),
            children: [
                {
                    path: '',
                    name: 'VipService',
                    component: () => import('@/views/member'),
                    props: (route) => (route.query),
                    meta: {
                        title: '会员信息查询'
                    }
                }
      ]
    }
  ]
})
