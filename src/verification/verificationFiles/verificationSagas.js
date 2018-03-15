// @flow
import { call, put, takeEvery, type IOEffect } from 'redux-saga/effects';
import type RoutineAction from 'redux-saga-routines';
import {
  verificationUploadRoutine,
  verificationPostRoutine,
} from './verificationRoutine';
import verificationApi from './verificationFilesApi';
import type { VerificationFile } from './verificationFilesApi';

export function* uploadVerificationFile(
  action: RoutineAction,
): Generator<IOEffect, void, *> {
  try {
    let verificationFile: VerificationFile = {
      type: action.payload.type,
      file: action.payload.file,
    };

    verificationFile = yield call(verificationApi.uploadFile, verificationFile);
    yield put(verificationUploadRoutine.success(verificationFile));
  } catch (error) {
    yield put(
      verificationUploadRoutine.failure({
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
    yield put(verificationUploadRoutine.failure(errors));
  } else {
    yield call(uploadVerificationFile, action);
  }
  yield put(verificationUploadRoutine.fulfill());
}

function* uploadVerificationFileSaga(): Generator<IOEffect, void, *> {
  yield takeEvery(verificationUploadRoutine.TRIGGER, validateVerificationFile);
}

export function* postVerificationFile(
  action: RoutineAction,
): Generator<IOEffect, void, *> {
  try {
    const verificationFile = yield call(
      verificationApi.postFile,
      action.payload,
    );
    yield put(verificationUploadRoutine.success(verificationFile));
  } catch (error) {
    yield put(
      verificationUploadRoutine.failure({
        _error:
          error.body.message ||
          'Oops! Something went wrong, please try again later.',
      }),
    );
    console.error(error);
  }
}

function* postVerificationFileSaga(): Generator<IOEffect, void, *> {
  yield takeEvery(verificationPostRoutine.TRIGGER, postVerificationFile);
}

export default [uploadVerificationFileSaga, postVerificationFileSaga];
