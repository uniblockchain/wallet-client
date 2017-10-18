// @flow

export type SignupState = {
  +email: ?string,
  +emailValidity: ?ValidityState,
  +password: ?string,
  +passwordValidity: ?ValidityState,
};

export const initialSignupState: SignupState = {
  email: '',
  emailValidity: null,
  password: '',
  passwordValidity: null,
};

export default initialSignupState;
