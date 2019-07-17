import $http from './$http';

// const baseURL = 'http://127.0.0.1:3000';
const baseURL = '/api';

// 请求首页的轮播图数据
//那么执行getHomeCasual()得到的是一个Promise对象
export const getHomeCasual =  function () {
  let promise = $http(`${baseURL}/api/homecasual`);
  return promise;
}
// 请求首页的导航数据
export const getHomeNav = ()=>$http(`${baseURL}/api/homenav`);
// 请求首页板块商品列表数据
 export const getHomeShopList = ()=>$http(`${baseURL}/api/homeshoplist`);

 //请求推荐板块的商品列表数据
 export const getRecommendShopList = (params)=>$http(`${baseURL}/api/recommendshoplist`,params);

 //请求搜索板块商品的数据
 export const getSearchGoods = ()=>$http(`${baseURL}/api/searchgoods`);

 //请求登录时候获取验证码，没有数据放入vuex中，所以actions中无需调用这个接口
 export const getSendCode = (params)=>$http(`${baseURL}/api/sendcode`,params);

 //登录时候进行验证，没有数据放入vuex中，所以actions中无需调用这个接口
 export const loginCode = (params)=>$http(`${baseURL}/api/logincode`,params,'POST');

 //根据服务端的session保存的id（id在用户登录时候保存了），获取用户信息来实现自动登录,在app.vue中调用
 export const autologingetuser = ()=>$http(`${baseURL}/api/autologingetuser`);

 //退出登录，这个接口将会清除服务器中session保存的用户id,从而确保页面刷新的时候，不会自动登录
export const logout = ()=>$http(`${baseURL}/api/logout`);

