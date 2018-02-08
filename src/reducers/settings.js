import {CHANGE_BRAND} from '../constants/ActionTypes'


function settings(state =[] ,action){
     switch (action.type) {
    case CHANGE_BRAND:
    	console.log('++++',state, action);
        let newState = {...state}
        newState.activeBrand = action.brandName
        return newState
    default:
      return state
  }
}


export default settings;