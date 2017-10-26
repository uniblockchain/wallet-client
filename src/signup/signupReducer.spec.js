// @flow

import signupReducer from './signupReducer';
import signupActions from './signupActions';
import { initialSignupState } from './signupState';

describe('signup reducer', () => {
  it('handles email update', () => {
    const newEmail = 'test2@example.com';
    const mockEmailValidity: any = jest.fn();
    const action = signupActions.signupEmailUpdate(newEmail, mockEmailValidity);
    const newState = signupReducer(initialSignupState, action);
    expect(newState.email).toEqual(newEmail);
    expect(newState.password).toEqual(initialSignupState.password);
  });

  it('handles password update', () => {
    const newPassword = 'test2';
    const mockPasswordValidity: any = jest.fn();
    const action = signupActions.signupPasswordUpdate(
      newPassword,
      mockPasswordValidity,
    );
    const newState = signupReducer(initialSignupState, action);
    expect(newState.password).toEqual(newPassword);
    expect(newState.email).toEqual(initialSignupState.email);
  });
});
