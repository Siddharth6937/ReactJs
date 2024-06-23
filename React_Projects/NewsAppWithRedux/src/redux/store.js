import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import { countReducer } from './count/reducer';
import { newsReducer } from './news/reducer';
import {thunk} from 'redux-thunk';

let rootReducer = combineReducers({
    count : countReducer,
    news : newsReducer
})

let store = createStore(
    rootReducer, 
    applyMiddleware(thunk, createLogger())
);

export default store;