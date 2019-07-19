import {
  getHomeCasual,
  getHomeNav,
  getHomeShopList,
  getRecommendShopList,
  getSearchGoods,
  autologingetuser,
  logout,

  resetUserImg,
  resetUserName,
  resetUserSex,
  resetUserAddress,
  resetUserBirthday,
  resetUserSign
} from '../api/index'
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
} from './mutation-types'


export default {
  //获取首页的轮播图片,那么这个函数应该是异步的，async表示这个函数是异步执行的,同时函数的内部的执行语句也是异步，所以需要await
  //action里面的函数会默认有一个参数：context对象,当然也可以有第二个参数，是dispatch传递过来的参数
  async reqHomeCasual (context) {
    //执行getHomeCasual 会得到一个Promise对象
    //await 只会在async函数内部使用
    //await 表达式会暂停当前 async function 的执行，等待 Promise 处理完成。
    //若 Promise 正常处理(fulfilled)，其回调的resolve函数参数作为 await 表达式的值，继续执行 async function。
    //若 Promise 处理异常(rejected)，await 表达式会把 Promise 的异常原因抛出。另外，如果 await 操作符后的表达式的值不是一个 Promise，则返回该值本身。
    //所以这里不需要.then()
    const data = await getHomeCasual();
    //commit 提交至于mutations里面，第一个参数是函数名，第二个参数是一个对象
    context.commit(HOME_CASUAL,{homecasual: data.message});
  },
   // 2. 获取首页的导航
   //这里直接用了对象的解构语法
   async reqHomeNav({commit}) {
    const data = await getHomeNav();
    commit(HOME_NAV, {homenav: data.message})
  },
  //获取首页板块的商品列表数据
  async reqHomeShopList({commit}){
    const result = await getHomeShopList();
    commit(HOME_SHOP_LIST,{homeshoplist:result.message.goods_list})
  },
  //获取推荐板块的商品列表数据
  async reqRecommendShopList({commit},params){
    const data  = await getRecommendShopList({startIndex:params.startIndex,size:params.size});
    commit(RECOMMEND_SHOP_LIST,{recommendshoplist:data.message});

     //这里我们设置一个延时器，是为了让页面显示有提示的效果，否则事件太短，效果不明显
    // && 的意思就是：如果params.closeIndicator存在，就执行closeIndicator(),这和 || 的作用相反
      params.closeIndicator && params.closeIndicator();
      if (data.message.length == 0) {
        params.msg && params.msg();
      }
  },
  
  //获取搜索板块的商品列表数据
  async reqSearchGoods({commit}) {
    const result  = await getSearchGoods();
    commit(SEARCH_GOODS,{searchgoods:result.message.data})
  },


  //获取搜索的历史记录,这个操作不需要异步
  reqHistoryValue({commit},param) {
    
    commit(HISTORY_VALUES,{value:param.value})
  },
  //清除历史记录,这个操作不需要异步
   clearHistoryValue({commit}) {
    
    commit(CLEAR_HISTORY_VALUES)
  },

  //用户成功登陆以后，把用户信息放入vuex里面,这个操作不需要异步
   setUser({commit},params) {
   
    commit(SET_USER,params)
  },

  //获取用户信息来实现自动登录
  async requser({commit}) {
    const result  = await autologingetuser();
    if (result.success_code === 200) {
      //用户之前登录了，同时session没有过期，成功得到之前该用户的信息
      commit(GET_USER,result.message)
    } else {
      //用户之前没有登录了，或者session过期，没有得到之前该用户的信息
      commit(GET_USER,{})
    }
    
  },
  //退出登录
  async reqlogout({commit}) {
    //这个接口将会清除服务器中session保存的用户id,从而确保页面刷新的时候，不会自动登录
    const result  = await logout();
    if (result.success_code === 200) {
      //同时让vuex里面保存的用户信息清空
      commit(LOGOUT_USER)
    } else {
      return;
    }
  },
  //重置用户信息
  async reqResetUser({commit},params) {
    //修改头像
    if (params.user_img) {
      const result  = await resetUserImg(params);
      if (result.success_code === 200) {
        //同时让vuex里面保存的用户的性别修改
        commit(RESET_USER_IMG,params);
        params.callback && params.callback();
      }
    }
    //修改昵称
    if (params.user_name) {
      const result  = await resetUserName(params);
      if (result.success_code === 200) {
        //同时让vuex里面保存的用户的性别修改
        commit(RESET_USER_NAME,params);
        params.callback && params.callback();
      }
    }
    //修改性别
    if (params.user_sex) {
      const result  = await resetUserSex(params);
      if (result.success_code === 200) {
        //同时让vuex里面保存的用户的性别修改
        commit(RESET_USER_SEX,params);
        params.callback && params.callback();
      }
    }
    //修改常驻地
    if (params.user_address) {
      const result  = await resetUserAddress(params);
      if (result.success_code === 200) {
        //同时让vuex里面保存的用户的性别修改
        commit(RESET_USER_ADDRESS,params);
        params.callback && params.callback();
      }
    }
    //修改生日
    if (params.user_birthday) {
      const result  = await resetUserBirthday(params);
      if (result.success_code === 200) {
        //同时让vuex里面保存的用户的性别修改
        commit(RESET_USER_BIRTHDAY,params);
        params.callback && params.callback();
      }
    }
    //修改个性签名
    if (params.user_sign) {
      const result  = await resetUserSign(params);
      if (result.success_code === 200) {
        //同时让vuex里面保存的用户的性别修改
        commit(RESET_USER_SIGN,params);
        params.callback && params.callback();
      }
    }
  },
}