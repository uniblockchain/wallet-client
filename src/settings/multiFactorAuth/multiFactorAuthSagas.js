import { call, put, takeLatest } from 'redux-saga/effects';
import multiFactorAuthApi from './multiFactorAuthApi';
import { createRoutine } from './multiFactorAuthRoutines';

export function* get2FaSecret(action) {
  try {
    const secretHolder = yield call(
      multiFactorAuthApi.createNewSecret,
      action.payload,
    );
    yield put(createRoutine.success(secretHolder));
  } catch (error) {
    console.error(error);
    yield put(createRoutine.failure((error.body || {}).message));
  }
}

function* create2FaSecretSaga() {
  yield takeLatest(createRoutine.TRIGGER, get2FaSecret);
}

export default create2FaSecretSaga;
