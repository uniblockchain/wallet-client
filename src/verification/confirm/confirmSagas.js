// @flow
import { call, type IOEffect, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import confirmRoutine from './confirmRoutine';
import { routes } from '../../router';
import verificationApi from '../verificationApi';

export function* startVerification(): Generator<IOEffect, void, *> {
  try {
    yield call(verificationApi.createVerification);
    yield put(confirmRoutine.success());
    yield put(push(routes.DEFAULT_ON_ENTER));
  } catch (error) {
    console.log(error);
    yield put(confirmRoutine.failure(error.body.message));
  }
  yield put(confirmRoutine.fulfill());
}

function* createConfirmSaga(): Generator<IOEffect, void, *> {
  yield takeLatest(confirmRoutine.TRIGGER, startVerification);
}

export default createConfirmSaga;
