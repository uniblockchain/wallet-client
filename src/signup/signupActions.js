// @flow

import signupActionTypes, {
  type SignupEmailUpdate,
  type SignupPasswordUpdate,
} from './signupActionTypes';

const signupEmailUpdate = (
  email: string,
  emailValidity: ValidityState,
): SignupEmailUpdate => ({
  type: signupActionTypes.SIGNUP_EMAIL_UPDATED,
  email,
  emailValidity,
});
const signupPasswordUpdate = (
  password: string,
  passwordValidity: ValidityState,
): SignupPasswordUpdate => ({
  type: signupActionTypes.SIGNUP_PASSWORD_UPDATED,
  password,
  passwordValidity,
});

export default {
  signupEmailUpdate,
  signupPasswordUpdate,
};
