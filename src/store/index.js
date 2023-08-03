import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from 'redux';
import createSagaMiddleWare from 'redux-saga';
import thunk from 'redux-thunk';
import { rootSaga } from '../sagas';
import { counterReducer } from './counterReducer';
import { usersReducer } from './usersReducer';

const sagaMiddleWare = createSagaMiddleWare();

const rootReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
});

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, sagaMiddleWare), devTools)
);

sagaMiddleWare.run(rootSaga);

export default store;
