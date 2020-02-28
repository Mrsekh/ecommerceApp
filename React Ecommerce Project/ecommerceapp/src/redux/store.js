/* create a store in redux where all the states are there 
    applymiddleware is used for using different middleware in redux
*/
import {compose, createStore, applyMiddleware } from "redux"
// logger is used for logging all the redux code we used
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// middleware used for taking the action to root reducer in redux
const middlewares = [logger];
const store = createStore(rootReducer,compose(applyMiddleware(...middlewares)));
export default store;