import {
  HOME_CASUAL,
  HOME_NAV,
  HOME_SHOP_LIST,
  RECOMMEND_SHOP_LIST,
  SEARCH_GOODS,
  HISTORY_VALUES,
  CLEAR_HISTORY_VALUES,
  SET_USER,
  GET_USER,
  LOGOUT_USER,

  RESET_USER_IMG,
  RESET_USER_NAME,
  RESET_USER_SEX,
  RESET_USER_ADDRESS, 
  RESET_USER_BIRTHDAY,
  RESET_USER_SIGN,
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
  },
  //获取推荐板块的商品数据
  [RECOMMEND_SHOP_LIST](state,{recommendshoplist}){
    state.recommendshoplist = state.recommendshoplist.concat(recommendshoplist) ;
  },
  [SEARCH_GOODS](state,{searchgoods}){
    state.searchgoods = searchgoods;
  },
  //搜索的历史记录
  [HISTORY_VALUES](state,{value}){
    state.historyvalues.push(value);
  },

  //清空历史记录
  [ CLEAR_HISTORY_VALUES](state){
    state.historyvalues.splice(0, state.historyvalues.length)
  },
  //用户成功登陆以后，vuex存入用户信息
  [SET_USER](state,params){
    state.user = params;
  },
  //获取用户信息，实现自动登录
  [GET_USER](state,params){
    state.user = params;
  },
  //退出登录
  [LOGOUT_USER](state){
    state.user = {}
  },
  //在state里面重置用户信息
  [RESET_USER_IMG](state,params){
    state.user.user_img = params.user_img
  },
  [RESET_USER_NAME](state,params){
    state.user.user_name = params.user_name
  },
  [RESET_USER_SEX](state,params){
    state.user.user_sex = params.user_sex
  },
  [RESET_USER_ADDRESS](state,params){
    state.user.user_address = params.user_address
  },
  [RESET_USER_BIRTHDAY](state,params){
    state.user.user_birthday = params.user_birthday
  },
  [RESET_USER_SIGN](state,params){
    state.user.user_sign = params.user_sign
  },
}