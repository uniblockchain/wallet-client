// @flow

import createHistory from 'history/createBrowserHistory';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import { routinePromiseWatcherSaga } from 'redux-saga-routines';
import { loginReducer, loginSagas, loginRoutine } from '../login';
import verificationTokenLoginSaga from '../login/verification-token/verificationTokenSagas';
import multiFactorAuthReducer from '../settings/multiFactorAuth/multiFactorAuthReducer';
import multiFactorAuthSaga from '../settings/multiFactorAuth/multiFactorAuthSagas';

import { userReducer, userSagas } from '../user';
import { profileSagas } from '../user/profile';
import { walletReducer, walletSagas } from '../wallet';
import { sendSagas, sendReducer } from '../wallet/send';
import { quoteSagas } from '../wallet/quote';
import { feeSagas, feeReducer } from '../wallet/fee';
import { pageReducer } from '../page';
import { flagsReducer } from '../flags';
import { addressSagas } from '../card/order/address';
import { confirmSagas, confirmReducer } from '../card/order/confirm';
import verificationSagas from '../card/order/verification/verificationSagas';
import { resetPasswordSagas } from '../user/password/reset';
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
  fee: feeReducer,
  confirm: confirmReducer,
  multiFactorAuth: multiFactorAuthReducer,
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
  ...(profileSagas || []),
  loginSagas,
  walletSagas,
  sendSagas,
  quoteSagas,
  ...(addressSagas || []),
  routinePromiseWatcherSaga,
  verificationSagas,
  confirmSagas,
  ...(feeSagas || []),
  resetPasswordSagas,
  verificationTokenLoginSaga,
  multiFactorAuthSaga,
].map(sagaMiddleware.run);

export default store;
