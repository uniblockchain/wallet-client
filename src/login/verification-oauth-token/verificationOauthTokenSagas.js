import { call, put, takeLatest } from 'redux-saga/effects';
import { verificationOauthTokenLoginRoutine } from './verificationOauthTokenRoutines';
import verificationOauthTokenApi from './verificationOauthTokenApi';

export function* fetchToken(lastToken) {
  try {
    yield put(verificationOauthTokenLoginRoutine.request());
    const oauthToken = yield call(verificationOauthTokenApi.login, lastToken);
    yield put(verificationOauthTokenLoginRoutine.success(oauthToken));
  } catch (error) {
    console.error(error);
    yield put(
      verificationOauthTokenLoginRoutine.failure(error.body.error_description),
    );
  }
}

function* validate(action) {
  const { payload } = action;
  yield call(fetchToken, payload);
  yield put(verificationOauthTokenLoginRoutine.fulfill());
}

function* verificationTokenLoginSaga() {
  yield takeLatest(verificationOauthTokenLoginRoutine.TRIGGER, validate);
}

export default verificationTokenLoginSaga;
