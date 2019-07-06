import {
  HOME_CASUAL,
  HOME_NAV,
  HOME_SHOP_LIST,
  RECOMMEND_SHOP_LIST,
  SEARCH_GOODS,
} from './mutation-types';

export default {
  //[字符串] 等价 把字符串变为一个变量
  //mutation 里面的函数有两个参数，第一个参数是一个默认的state对象，第二个参数是action传递过来的类型为对象的参数
  [HOME_CASUAL] (state,object) {
    state.homecasual = object.homecasual;
  },
  //获取首页导航  这里的第二个参数采用了对象的解构
  [HOME_NAV] (state,{homenav}) {
    state.homenav = homenav;
  },
  //获取首页商品列表
  [HOME_SHOP_LIST] (state,{homeshoplist}){
    state.homeshoplist = homeshoplist;
  }
}