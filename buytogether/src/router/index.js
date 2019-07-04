import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import Recommend from '@/pages/Recommend/Recommend'
import Chat from '@/pages/Chat/Chat'
import Search from '@/pages/Search/Search'
import Me from '@/pages/Me/Me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/chat',
      component: Chat
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/me',
      component: Me
    }
  ]
})
