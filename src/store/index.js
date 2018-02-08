import { createStore, applyMiddleware  ,compose } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { syncHistoryWithStore } from 'react-router-redux';
import {browserHistory } from 'react-router'
import rootReducer from '../reducers'
import settings from '../data/settings';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const defaultState ={
	settings
};
const middleware = applyMiddleware(thunk, logger)

const store = createStore(
        rootReducer,
        defaultState, middleware, composeEnhancers(
        applyMiddleware(thunk),
    ))

    

export const history = syncHistoryWithStore(browserHistory, store)


export default store;