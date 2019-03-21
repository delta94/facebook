import rootSaga from './configureSaga';
import { createStore, applyMiddleware,combineReducers } from 'redux'
import reducer from './App/Screens/homeTab/HomeTabReducer';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({reducer});

export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(rootSaga)
  return store
}