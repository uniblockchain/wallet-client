import { call, put, takeLatest } from 'redux-saga/effects';
import walletApi from './walletApi';
import walletActions from './walletActions';
import walletActionTypes from './walletActionTypes';

// worker Saga: will be fired on WALLET_FETCH_REQUESTED actions
function* fetchWallet() {
  try {
    const wallet = yield call(walletApi.fetchWallet);
    yield put(walletActions.walletFetchSucceeded(wallet));
  } catch (error) {
    yield put(walletActions.walletFetchFailed(error.message));
    console.error(error);
  }
}

function* walletFetchSaga() {
  yield takeLatest(walletActionTypes.WALLET_FETCH_REQUESTED, fetchWallet);
}

export default walletFetchSaga;
