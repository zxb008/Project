import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home'
import Recommend from '../pages/Recommend/Recommend'
import Chat from '../pages/Chat/Chat'
import Search from '../pages/Search/Search'
import Me from '../pages/Me/Me'
import Login from '../pages/Login/Login'
import User from '../pages/User/User'
import Setting from '../pages/Setting/Setting'
import SearchResult from '../pages/SearchResult/SearchResult'
import Cart from '../pages/Cart/Cart'

import Hot from '../pages/Home/Children/Hot/Hot'
import WomanClothes from '../pages/Home/Children/WomanClothes'
import DepartmentStore from '../pages/Home/Children/DepartmentStore'
import ShopBag from '../pages/Home/Children/ShopBag'
import Foods from '../pages/Home/Children/Foods'
import MontherBaby from '../pages/Home/Children/MontherBaby'
import Underwear from '../pages/Home/Children/Underwear'
import ElectricAppliance from '@/pages/Home/Children/ElectricAppliance'
import ManClothes from '../pages/Home/Children/ManClothes'

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
        // meta是route的一个对象属性，用来存值，可以在对应的页面上取出来
        { path: 'hot', component: Hot,meta:{showTabBar:true}},
        { path: 'womanClothes', component: WomanClothes,meta:{showTabBar:true}},
        { path: 'departmentStore', component: DepartmentStore,meta:{showTabBar:true}},
        { path: 'shopBag', component: ShopBag,meta:{showTabBar:true}},
        { path: 'foods', component: Foods,meta:{showTabBar:true}},
        { path: 'montherBaby', component: MontherBaby,meta:{showTabBar:true}},
        { path: 'underwear', component: Underwear,meta:{showTabBar:true}},
        { path: 'electricAppliance', component: ElectricAppliance,meta:{showTabBar:true}},
        { path: 'manClothes', component: ManClothes,meta:{showTabBar:true}},
      ]
    },
    {
      path: '/recommend',
      name:'recommend',
      component: Recommend,
      meta: {showTabBar: true}
    },
    {
      path: '/search',
      name:'search',
      component: Search,
      meta:{showTabBar:true}
    },
    {
      path: '/chat',
      name:'chat',
      component: Chat,
      meta:{showTabBar:true}
    },
    {
      path: '/me',
      name:'me',
      component: Me,
      meta:{showTabBar:true}
    },
    {
      path: '/login',
      name:'login',
      component: Login,
      meta:{showTabBar:false}
    },
    {
      path: '/user',
      name:'user',
      component: User,
      meta:{showTabBar:false}
    },
    {
      path:'/setting',
      name:'setting',
      component: Setting,
      meta:{showTabBar:false}
    },
    {
      path:'/searchresult',
      name:'searchresult',
      component: SearchResult,
      meta:{showTabBar:false}
    },
    {
      path:'/cart',
      name:'cart',
      component: Cart,
      meta:{showTabBar:false}
    }
  ]
})
