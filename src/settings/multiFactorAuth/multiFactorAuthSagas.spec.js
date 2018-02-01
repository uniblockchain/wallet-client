// @flow

import { call, put } from 'redux-saga/effects';

import multiFactorAuthApi from './multiFactorAuthApi';
import createRoutine from './multiFactorAuthRoutines';
import { get2FaSecret } from './multiFactorAuthSagas';

describe('multi factor auth sagas', () => {
  it('works', () => {
    const passwordHolder = { password: 'somePass' };
    const secretHolder = { secret: 'someSecret' };

    const generator = get2FaSecret(createRoutine(passwordHolder));

    expect(generator.next().value).toEqual(
      call(multiFactorAuthApi.createNewSecret, passwordHolder),
    );
    expect(generator.next(secretHolder).value).toEqual(
      put(createRoutine.success(secretHolder)),
    );
    expect(generator.next().done).toBeTruthy();
  });
});
