import { INIT_HOME_DATA,INIT_SOWING_DATA,INIT_USER_INFO } from './actionTypes'
const defaultState = {
  homeData:{},
  sowingData:[],
  userInfo:{}
}

export default (state = defaultState, action) => {
  if(action.type === INIT_HOME_DATA){
    const newState = JSON.parse(JSON.stringify(state));
    newState.homeData = action.homeData
    return newState;
  }else if(action.type ===INIT_SOWING_DATA ){
    const newState = JSON.parse(JSON.stringify(state));
    newState.sowingData = action.sowingData;
    return newState;
  }else if(action.type ===INIT_USER_INFO ){
    const newState = JSON.parse(JSON.stringify(state));
    newState.userInfo = action.userInfo;
    return newState;
  }
  return state
}