import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import Recommend from '@/pages/Recommend/Recommend'
import Chat from '@/pages/Chat/Chat'
import Search from '@/pages/Search/Search'
import Me from '@/pages/Me/Me'

import Hot from '@/pages/Home/Children/Hot'
import WomanClothes from '@/pages/Home/Children/WomanClothes'
import DepartmentStore from '@/pages/Home/Children/DepartmentStore'
import ShopBag from '@/pages/Home/Children/ShopBag'
import Foods from '@/pages/Home/Children/Foods'
import MontherBaby from '@/pages/Home/Children/MontherBaby'
import Underwear from '@/pages/Home/Children/Underwear'
import ElectricAppliance from '@/pages/Home/Children/ElectricAppliance'
import ManClothes from '@/pages/Home/Children/ManClothes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name:'home',
      component: Home,
      children:[
        { path: '/home', redirect:'/home/hot'},
        { path: 'hot', component: Hot},
        { path: 'womanClothes', component: WomanClothes},
        { path: 'departmentStore', component: DepartmentStore},
        { path: 'shopBag', component: ShopBag},
        { path: 'foods', component: Foods},
        { path: 'montherBaby', component: MontherBaby},
        { path: 'underwear', component: Underwear},
        { path: 'electricAppliance', component: ElectricAppliance},
        { path: 'manClothes', component: ManClothes},
      ]
    },
    {
      path: '/recommend',
      name:'recommend',
      component: Recommend
    },
    {
      path: '/search',
      name:'search',
      component: Search
    },
    {
      path: '/chat',
      name:'chat',
      component: Chat
    },
    {
      path: '/me',
      name:'me',
      component: Me
    }
  ]
})
