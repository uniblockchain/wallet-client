// @flow

import { type SignupState, initialSignupState } from './signupState';
import signupAction, { type SignupAction } from './signupActionTypes';

const signupReducer = (
  state: SignupState = initialSignupState,
  action: SignupAction,
): SignupState => {
  switch (action.type) {
    case signupAction.SIGNUP_EMAIL_UPDATED:
      return {
        ...state,
        email: action.email,
        emailValidity: action.emailValidity,
      };

    case signupAction.SIGNUP_PASSWORD_UPDATED:
      return {
        ...state,
        password: action.password,
        passwordValidity: action.passwordValidity,
      };

    default:
      return state;
  }
};

export default signupReducer;
