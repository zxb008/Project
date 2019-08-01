import { INIT_HOME_DATA,INIT_SOWING_DATA } from './actionTypes'
const defaultState = {
  homeData:{},
  sowingData:[]
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
  }
  return state
}