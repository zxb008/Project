import axios from 'axios';

//定义一个$http函数对axios进行封装，$http函数返回一个Promise对象
//注意一旦执行$http函数，那么返回一个Promise对象，那么Promise里面写好的回调函数会直接执行
function $http(url, params = {}, type = 'GET') {
  //统一转化为大写形式
  type = type.toUpperCase();
  //定义一个promise变量来接收axios返回的Promise对象
  let promise;
  return new Promise(function (resolve, reject) {

    if (type === 'GET') {
      //把传进来的参数拼接到字符串上面
      var strParams = '';
      //Object.keys()方法会返回一个由一个给定对象的自身可枚举属性组成的数组。
      //data：{a: 1, b: 2, c: 9, d: 4, e: 5}
			//console.log(Object.keys(data));["a", "b", "c", "d", "e"]
      Object.keys(params).forEach(function (ele) {
        strParams += key + '=' + params[key] + '&'
      })
      //清除strParams最后面那个&
      if (strParams !== '') {
        strParams = strParams.substr(0,paramsStr.lastIndexOf('&'))
      }
      //拼接完整的路径
      url += '?'+strParams;
      //axios发送请求.返回的是一个Promise对象
      promise = axios.get(url)
    } else if (type === 'POST') {
      //axios发送请求.返回的是一个Promise对象
      promise = axios.post(url,params)
    }
    //这里需要注意，$http函数返回的是一个Promise对象,return new Promise(function (resolve, reject) { }
    //所以外界调用这个函数的时候也会$http.then(),那么resolve()和reject()中的参数是根绝axios返回的promise来确定的
    promise.then(function (res) {
      resolve(res.data);
    }).catch(function (err) {
      reject(err)
    })
  })
}

export default $http;