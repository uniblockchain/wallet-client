import { call, put, fork, take } from 'redux-saga/effects';
import walletApi from './walletApi';
import walletActions from './walletActions';
import walletActionTypes from './walletActionTypes';
import { pageActions } from '../page';

// worker Saga: will be fired on WALLET_FETCH_REQUESTED actions
function* fetchWallet() {
  try {
    yield put(pageActions.showProgress(true));
    const wallet = yield call(walletApi.fetchWallet);
    yield put(walletActions.walletFetchSucceeded(wallet));
    yield put(pageActions.showProgress(false));
  } catch (error) {
    yield put(walletActions.walletFetchFailed(error.message));
    yield put(pageActions.showProgress(false));
    console.error(error);
  }
}

function* takeFirst(pattern, saga, ...args) {
  return yield fork(function*() {
    while (true) {
      const action = yield take(pattern);
      yield call(saga, ...args.concat(action));
    }
  });
}

function* walletFetchSaga() {
  yield takeFirst(walletActionTypes.WALLET_FETCH_REQUESTED, fetchWallet);
}

export default walletFetchSaga;
