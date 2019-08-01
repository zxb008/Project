import {getHomeData, getSowingData} from '../api/index'
import { INIT_HOME_DATA ,INIT_SOWING_DATA } from './actionTypes'

// const action = {  type:DELETE_ITEM, index}
// store.dispatch(action)
// ===========
// const action = changeInputAction(e.target.value)
// store.dispatch(action)
//获取首页数据,getHomeDataAction是一个函数，返回的是一个对象，所以用（）包起来
// export const getHomeDataAction = (value) => ({
//   type:INIT_HOME_DATA,
//   value
// })
export const getHomeDataAction = () =>{
  //返回一个函数
  return (dispatch) =>{
   
    //请求网络数据
    getHomeData().then((res)=>{
      if (res.status_code === 200) {
        const homeData = res.result[0];
        // console.log(homeData);
       
        dispatch({
          type:INIT_HOME_DATA,
          homeData
        })
      }
    }).catch(()=>{
      console.log('获取数据失败！');
    })
  }
}
//获取轮播图列表数据
export const getSowingDataAction = ()=>{
  return (dispatch) =>{
    getSowingData().then(
      (res)=>{
        if (res.status_code === 200) {
          const sowingData = res.result;
         
          dispatch({
            type:INIT_SOWING_DATA,
            sowingData
          })
        }
      }
    ).catch();
  }
}
