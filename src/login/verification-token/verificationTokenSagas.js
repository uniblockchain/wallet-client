import { call, put, takeLatest } from 'redux-saga/effects';
import { verificationTokenLoginRoutine } from './verificationTokenRoutines';
import verificationTokenApi from './verificationTokenApi';

export function* fetchToken(verificationToken) {
  try {
    yield put(verificationTokenLoginRoutine.request());
    const oauthToken = yield call(
      verificationTokenApi.login,
      verificationToken,
    );
    yield put(verificationTokenLoginRoutine.success(oauthToken));
  } catch (error) {
    console.error(error);
    yield put(
      verificationTokenLoginRoutine.failure(error.body.error_description),
    );
  }
}

function* validate(action) {
  const { payload } = action;
  yield call(fetchToken, payload);
  yield put(verificationTokenLoginRoutine.fulfill());
}

function* verificationTokenLoginSaga() {
  yield takeLatest(verificationTokenLoginRoutine.TRIGGER, validate);
}

export default verificationTokenLoginSaga;
