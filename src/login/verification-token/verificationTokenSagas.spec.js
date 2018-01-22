// @flow
import { put } from 'redux-saga/effects';
import { verificationTokenLoginRoutine } from './verificationTokenRoutines';
import { fetchToken } from './verificationTokenSagas';

jest.mock('./verificationTokenApi');

describe('verification token login sagas', () => {
  it('can login with verification token', () => {
    const resetPasswordFormValues: * = {
      verificationToken: 'Token',
    };

    const generator = fetchToken(
      verificationTokenLoginRoutine({
        values: resetPasswordFormValues,
      }),
    );
    expect(generator.next(resetPasswordFormValues).value).toEqual(
      put(verificationTokenLoginRoutine.request()),
    );
  });
});
