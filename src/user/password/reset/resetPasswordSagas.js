// @flow

import { call, put, takeLatest } from 'redux-saga/effects';
import type { IOEffect } from 'redux-saga/effects';
import type RoutineAction from 'redux-saga-routines';
import { SubmissionError } from 'redux-form';
import { resetPasswordRoutine } from './resetPasswordRoutines';
import resetPasswordApi from './resetPasswordApi';

export function* resetPasswordNotification(
  action: RoutineAction,
): Generator<IOEffect, void, *> {
  try {
    const { email } = action.payload.values;
    yield call(resetPasswordApi.resetPassword, email);
    yield put(resetPasswordRoutine.success());
  } catch (error) {
    console.error(error);
    yield put(
      resetPasswordRoutine.failure(
        new SubmissionError({
          _error: (error.body || {}).message,
        }),
      ),
    );
  }
}

function getFormErrors(values: *): * {
  const errors = {};
  if (!values.email) {
    errors.email = 'Please fill in the email.';
  }

  return errors;
}

function* validateForm(action: RoutineAction): Generator<IOEffect, void, *> {
  const errors = getFormErrors(action.payload.values);
  if (Object.keys(errors).length) {
    yield put(resetPasswordRoutine.failure(new SubmissionError(errors)));
  } else {
    yield call(resetPasswordNotification, action);
  }
  yield put(resetPasswordRoutine.fulfill());
}

function* resetPasswordSaga(): Generator<IOEffect, void, *> {
  yield takeLatest(resetPasswordRoutine.TRIGGER, validateForm);
}

export default resetPasswordSaga;
