import { createStore ,combineReducers , applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import  reducer  from './reducers/reducer';
import  dataReducer  from './reducers/dataReducer';
import translateReducer from './reducers/translateReducer'
export default createStore(combineReducers({reducer , dataReducer,translateReducer}),{},applyMiddleware(logger));
