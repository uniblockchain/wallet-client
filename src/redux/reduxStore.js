// @flow

import createHistory from 'history/createBrowserHistory';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import { routinePromiseWatcherSaga } from 'redux-saga-routines';
import { loginReducer, loginSagas, loginRoutine } from '../login';

import { userReducer, userSagas } from '../user';
import { walletReducer, walletSagas } from '../wallet';
import { quoteSagas, sendSagas, sendReducer } from '../wallet/send';
import { pageReducer } from '../page';
import { flagsReducer } from '../flags';
import { addressSagas } from '../card/order/address';
import verificationSagas from '../card/order/verification/verificationSagas';
import rootReducer from './rootReducer';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createHistory();

const appReducer = combineReducers({
  router: routerReducer,
  user: userReducer,
  wallet: walletReducer,
  login: loginReducer,
  form: formReducer,
  page: pageReducer,
  send: sendReducer,
  flags: flagsReducer,
  address: addressSagas,
  verification: verificationSagas,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  routerMiddleware(history),
  sagaMiddleware,
  // ...otherMiddleware,
];

const storeEnhancer = composeEnhancers(applyMiddleware(...middleware));

export const store = createStore(rootReducer(appReducer), storeEnhancer);

store.dispatch(loginRoutine.fulfill());

[
  userSagas,
  loginSagas,
  walletSagas,
  sendSagas,
  quoteSagas,
  addressSagas,
  routinePromiseWatcherSaga,
  verificationSagas,
].map(sagaMiddleware.run);

export default store;
