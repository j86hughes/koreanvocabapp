import { combineReducers } from 'redux';
import superReducer from './modules/superReducer/reducer';
import { STORE_NAME as superReducerName } from './modules/superReducer/constants';

const allReducers = combineReducers({
  [superReducerName]: superReducer,
})

export default allReducers;
