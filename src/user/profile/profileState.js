// @flow

export type Profile = {
  +id: ?number,
  +firstName: ?string,
  +lastName: ?string,
  +dateOfBirth: ?Date,
  +mobileNumber: ?string,
};

export type ProfileState = {
  ...Profile,
  error: ?string,
};

export const initialProfileState: ProfileState = {
  id: null,
  firstName: null,
  lastName: null,
  dateOfBirth: null,
  mobileNumber: null,
  error: null,
};

export default initialProfileState;
