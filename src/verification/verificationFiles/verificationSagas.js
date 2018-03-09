// @flow
import { call, put, takeEvery, type IOEffect } from 'redux-saga/effects';
import type RoutineAction from 'redux-saga-routines';
import verificationRoutine from './verificationRoutine';
import verificationApi from './verificationFilesApi';
import type { VerificationFile } from './verificationFilesApi';

export function* createVerificationFile(
  action: RoutineAction,
): Generator<IOEffect, void, *> {
  try {
    let verificationFile: VerificationFile = {
      type: action.payload.type,
      file: action.payload.file,
    };

    verificationFile = yield call(
      verificationApi.uploadDocument,
      verificationFile,
    );
    yield put(verificationRoutine.success(verificationFile));
  } catch (error) {
    yield put(
      verificationRoutine.failure({
        _error:
          error.body.message ||
          'Oops! Something went wrong, please try again later.',
      }),
    );
    console.error(error);
  }
}

function getErrors(values: VerificationFile) {
  const errors = {};
  if (!values.type) {
    errors.type = 'No type!';
  }

  if (!values.file) {
    errors.file = 'No file selected!';
  }

  return errors;
}

function* validateVerificationFile(
  action: RoutineAction,
): Generator<IOEffect, void, *> {
  const errors = getErrors(action.payload);
  if (Object.keys(errors).length) {
    yield put(verificationRoutine.failure(errors));
  } else {
    yield call(createVerificationFile, action);
  }
  yield put(verificationRoutine.fulfill());
}

function* createVerificationFileSaga(): Generator<IOEffect, void, *> {
  yield takeEvery(verificationRoutine.TRIGGER, validateVerificationFile);
}

export default createVerificationFileSaga;
