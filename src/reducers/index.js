import { combineReducers } from 'redux'
import {routerReducer} from 'react-router-redux'
import settings from './settings';


const rootReducer = combineReducers({settings, routing: routerReducer});


export default rootReducer