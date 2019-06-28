import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Cassification from '@/pages/Cassification'
import Life from '@/pages/Life'
import Cart from '@/pages/Cart'
import My from '@/pages/My'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/cassification',
      name: 'Cassification',
      component: Cassification
    },
    {
      path: '/life',
      name: 'Life',
      component: Life
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/my',
      name: 'My',
      component: My
    }
  ],
  linkActiveClass: 'is-active'
})
