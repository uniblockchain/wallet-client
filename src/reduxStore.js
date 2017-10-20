// @flow

import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';

import { userReducer, userSagas } from './user';
import { signupReducer } from './signup';
import { loginReducer, loginSagas } from './login';
import { walletReducer, walletSagas } from './wallet';

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
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  routerMiddleware(history),
  sagaMiddleware,
  // ...otherMiddleware,
];

const storeEnhancer = composeEnhancers(applyMiddleware(...middleware));

export const store = createStore(rootReducer, storeEnhancer);

sagaMiddleware.run(userSagas);
sagaMiddleware.run(loginSagas);
sagaMiddleware.run(walletSagas);

export default store;
