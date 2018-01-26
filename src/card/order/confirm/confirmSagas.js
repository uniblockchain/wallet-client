// @flow
import { call, type IOEffect, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import confirmRoutine from './confirmRoutine';
import cardOrderApi from '../cardOrderApi';
import { routes } from '../../../router';

export function* createOrder(): Generator<IOEffect, void, *> {
  try {
    yield call(cardOrderApi.createOrder);
    yield put(confirmRoutine.success());
    yield put(push(routes.WALLET_COMING_SOON));
  } catch (error) {
    console.error(error);
    yield put(confirmRoutine.failure(error.body.message));
  }
}

function* validate(): Generator<IOEffect, void, *> {
  yield call(createOrder);
  yield put(confirmRoutine.fulfill());
}

function* createConfirmSaga(): Generator<IOEffect, void, *> {
  yield takeLatest(confirmRoutine.TRIGGER, validate);
}

export default createConfirmSaga;
