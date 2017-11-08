import { call, put, takeLatest } from 'redux-saga/effects';
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

function* walletFetchSaga() {
  yield takeLatest(walletActionTypes.WALLET_FETCH_REQUESTED, fetchWallet);
}

export default walletFetchSaga;
