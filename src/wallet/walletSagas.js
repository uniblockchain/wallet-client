import { call, put, takeLatest } from 'redux-saga/effects';
import walletApi from './walletApi';
import walletActions from './walletActions';
import walletActionTypes from './walletActionTypes';

// worker Saga: will be fired on WALLET_FETCH_REQUESTED actions
function* fetchWallet() {
  try {
    const wallet = yield call(walletApi.fetchWallet);
    yield put(walletActions.walletFetchSucceeded(wallet));
  } catch (e) {
    yield put(walletActions.walletFetchFailed(e.message));
    throw e;
  }
}

function* walletFetchSaga() {
  yield takeLatest(walletActionTypes.WALLET_FETCH_REQUESTED, fetchWallet);
}

export default walletFetchSaga;
