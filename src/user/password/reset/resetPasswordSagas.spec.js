// @flow

import { call, put } from 'redux-saga/effects';
import { resetPasswordRoutine } from './resetPasswordRoutines';
import resetPasswordApi from './resetPasswordApi';
import { resetPasswordNotification } from './resetPasswordSagas';

describe('reset password sagas', () => {
  it('can reset password', () => {
    const resetPasswordFormValues: * = {
      email: 'jordan@getchange.com',
    };

    const generator = resetPasswordNotification(
      resetPasswordRoutine({
        values: resetPasswordFormValues,
      }),
    );

    expect(generator.next().value).toEqual(
      call(resetPasswordApi.resetPassword, resetPasswordFormValues.email),
    );
    expect(generator.next(resetPasswordFormValues).value).toEqual(
      put(resetPasswordRoutine.success()),
    );
    expect(generator.next().done).toBeTruthy();
  });
});
