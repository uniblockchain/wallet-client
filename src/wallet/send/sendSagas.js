// @flow
import { call, put, takeLatest } from 'redux-saga/effects';
import { SubmissionError } from 'redux-form';
import { sendRoutine } from './sendRoutines';
import sendApi from './sendApi';
import tracker from '../../tracker';

function* sendTransaction(values) {
  try {
    yield put(sendRoutine.request());
    const response = yield call(
      sendApi.sendTransaction,
      values.sendToAddress,
      values.amountInCrypto,
      values.activeWallet.id,
    );
    tracker.trackSend(values.activeWallet.currency, values.amountInCrypto);
    yield put(sendRoutine.success(response));
  } catch (error) {
    console.error(error);
    yield put(
      sendRoutine.failure(
        new SubmissionError({ _error: (error.body || {}).message }),
      ),
    );
  }
}

function getFormErrors(values) {
  const errors = {};
  if (!values.sendToAddress) {
    errors.sendToAddress = 'No address provided!';
  }
  if (!values.amountInCrypto) {
    errors.amountInCrypto = 'No amount provided!';
  }
  if (!values.activeWallet) {
    errors.activeWallet = 'No wallet provided!';
  }
  return errors;
}

function* validate(action) {
  const { values } = action.payload;
  const errors = getFormErrors(values);
  if (Object.keys(errors).length) {
    yield put(sendRoutine.failure(new SubmissionError(errors)));
  } else {
    yield call(sendTransaction, values);
  }
  yield put(sendRoutine.fulfill());
}

function* sendTransactionSaga(): Generator<*, *, *> {
  yield takeLatest(sendRoutine.TRIGGER, validate);
}

export default sendTransactionSaga;
