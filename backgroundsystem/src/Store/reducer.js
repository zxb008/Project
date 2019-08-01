import { INIT_HOME_DATA } from './actionTypes'
const defaultState = {
  homeData:{}
}

export default (state = defaultState, action) => {
  if(action.type === INIT_HOME_DATA){
    const newState = JSON.parse(JSON.stringify(state));
    newState.homeData = action.homeData
    return newState;
  }
  return state
}