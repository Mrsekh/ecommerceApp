/* create a store in redux where all the states are there 
    applymiddleware is used for using different middleware in redux
*/
import {createStore, applyMiddleware } from "redux"
// logger is used for logging all the redux code we used
import logger from 'redux-logger';
import {persistStore} from 'redux-persist';
import {persistReducers} from './root-reducer';

// middleware used for taking the action to root reducer in redux
const middlewares = [logger];
export const store = createStore(persistReducers,applyMiddleware(...middlewares));
export const persistor =  persistStore(store);