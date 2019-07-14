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

 //请求登录时候获取验证码
 export const getSendCode = ()=>$http(`${baseURL}/api/sendcode`);

