// @flow

const SIGNUP_EMAIL_UPDATED = '@signup/SIGNUP_EMAIL_UPDATED';
const SIGNUP_PASSWORD_UPDATED = '@signup/SIGNUP_PASSWORD_UPDATED';

export type SignupEmailUpdate = {
  +type: '@signup/SIGNUP_EMAIL_UPDATED',
  +email: string,
  +emailValidity: ValidityState,
};

export type SignupPasswordUpdate = {
  +type: '@signup/SIGNUP_PASSWORD_UPDATED',
  +password: string,
  +passwordValidity: ValidityState,
};

export type SignupAction = SignupEmailUpdate | SignupPasswordUpdate;

export default {
  SIGNUP_EMAIL_UPDATED,
  SIGNUP_PASSWORD_UPDATED,
};
