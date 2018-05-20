import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import allReducers from '../';
import allSagas from '../modules/superReducer/saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  allReducers,
  composeWithDevTools(
  applyMiddleware(sagaMiddleware),
  // other store enhancers if any
));

sagaMiddleware.run(allSagas);

export default store;
