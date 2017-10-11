// @flow

import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';

import { userReducer, userSagas } from './user';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createHistory();

const rootReducer = combineReducers({
  router: routerReducer,
  user: userReducer,
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
