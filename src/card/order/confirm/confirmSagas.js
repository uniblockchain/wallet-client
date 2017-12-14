// @flow
import { call, put, takeLatest, type IOEffect } from 'redux-saga/effects';
import type RoutineAction from 'redux-saga-routines';
import { SubmissionError } from 'redux-form';
import confirmRoutine from './confirmRoutine';
import cardOrderApi from '../cardOrderApi';

export function* createOrder(walletId: number): Generator<IOEffect, void, *> {
  try {
    yield call(cardOrderApi.createOrder, walletId);
    yield put(confirmRoutine.success());
  } catch (error) {
    yield put(
      confirmRoutine.failure(
        new SubmissionError({
          _error:
            error.body.message ||
            'Oops! Something went wrong, please try again later.',
        }),
      ),
    );
    console.error(error);
  }
}

function* validate(action: RoutineAction): Generator<IOEffect, void, *> {
  const { wallet } = action.payload.values;
  yield call(createOrder, wallet);
  yield put(confirmRoutine.fulfill());
}

function* createConfirmSaga(): Generator<IOEffect, void, *> {
  yield takeLatest(confirmRoutine.TRIGGER, validate);
}

export default createConfirmSaga;
