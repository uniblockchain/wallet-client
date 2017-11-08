// @flow

import createHistory from 'history/createBrowserHistory';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import { loginReducer, loginSagas } from '../login';
import { signupReducer } from '../signup';

import { userReducer, userSagas } from '../user';
import { walletReducer, walletSagas } from '../wallet';
import { quoteSagas, sendSagas } from '../wallet/send';
import { pageReducer } from '../page';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createHistory();

const rootReducer = combineReducers({
  router: routerReducer,
  user: userReducer,
  wallet: walletReducer,
  signup: signupReducer,
  login: loginReducer,
  form: formReducer,
  page: pageReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  routerMiddleware(history),
  sagaMiddleware,
  // ...otherMiddleware,
];

const storeEnhancer = composeEnhancers(applyMiddleware(...middleware));

export const store = createStore(rootReducer, storeEnhancer);

[userSagas, loginSagas, walletSagas, sendSagas, quoteSagas].map(
  sagaMiddleware.run,
);

export default store;
