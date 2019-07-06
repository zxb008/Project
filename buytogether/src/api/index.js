import $http from './$http';

const baseURL = 'http://127.0.0.1:3000';

// 请求首页的轮播图
//那么执行getHomeCasual()得到的是一个Promise对象
export const getHomeCasual =  function () {
  let promise = $http(`${baseURL}/api/homecasual`);
  return promise;
}
// 2.2 请求首页的导航
export const getHomeNav = ()=>$http(`${baseURL}/api/homenav`);
//请求商品列表数据
 export const getHomeShopList = ()=>$http(`${baseURL}/api/homeshoplist`);
