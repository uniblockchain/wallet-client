// @flow
import { put } from 'redux-saga/effects';
import { verificationOauthTokenLoginRoutine } from './verificationOauthTokenRoutines';
import { fetchToken } from './verificationOauthTokenSagas';

jest.mock('./verificationOauthTokenApi');

describe('verification token login sagas', () => {
  it('can login with verification token', () => {
    const resetPasswordFormValues: * = {
      verificationToken: 'Token',
    };

    const generator = fetchToken(
      verificationOauthTokenLoginRoutine({
        values: resetPasswordFormValues,
      }),
    );
    expect(generator.next(resetPasswordFormValues).value).toEqual(
      put(verificationOauthTokenLoginRoutine.request()),
    );
  });
});
