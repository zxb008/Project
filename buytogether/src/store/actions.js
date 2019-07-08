import {
  getHomeCasual,
  getHomeNav,
  getHomeShopList,
  getRecommendShopList,
  getSearchGoods
} from '../api/index'
import {
  HOME_CASUAL,
  HOME_NAV,
  HOME_SHOP_LIST,
  RECOMMEND_SHOP_LIST,
  SEARCH_GOODS,
} from './mutation-types'


export default {
  //获取首页的轮播图片,那么这个函数应该是异步的，async表示这个函数是异步执行的
  //action里面的函数会默认有一个参数：context对象,当然也可以有第二个参数，是dispatch传递过来的参数
  async reqHomeCasual (context) {
    //执行getHomeCasual 会得到一个Promise对象
    //await 只会在async函数内部使用
    //await 表达式会暂停当前 async function 的执行，等待 Promise 处理完成。
    //若 Promise 正常处理(fulfilled)，其回调的resolve函数参数作为 await 表达式的值，继续执行 async function。
    //若 Promise 处理异常(rejected)，await 表达式会把 Promise 的异常原因抛出。另外，如果 await 操作符后的表达式的值不是一个 Promise，则返回该值本身。
    //所以这里不需要.then()
    const result = await getHomeCasual();
    //commit 提交至于mutations里面，第一个参数是函数名，第二个参数是一个对象
    context.commit(HOME_CASUAL,{homecasual: result.message.data});
  },
   // 2. 获取首页的导航
   //这里直接用了对象的解构语法
   async reqHomeNav({commit}) {
    const result = await getHomeNav();
    commit(HOME_NAV, {homenav: result.message.data})
  },
  //获取首页板块的商品列表数据
  async reqHomeShopList({commit}){
    const result = await getHomeShopList();
    commit(HOME_SHOP_LIST,{homeshoplist:result.message.goods_list})
  },
  //获取推荐板块的商品列表数据
  async reqRecommendShopList({commit}){
    const result  = await getRecommendShopList();
    commit(RECOMMEND_SHOP_LIST,{recommendshoplist:result.message.data})
  },
  
  //获取搜索板块的商品列表数据
  async reqSearchGoods({commit}) {
    const result  = await getSearchGoods();
    commit(SEARCH_GOODS,{searchgoods:result.message.data})
  }
}