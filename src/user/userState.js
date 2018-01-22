// @flow
import { initialProfileState } from './profile';
import { type ProfileState } from './profile/profileState';

export type User = {
  +id: ?number,
  +email: ?string,
  +password: ?string,
};

export type UserState = {
  +id: ?number,
  +email: ?string,
  +profile: ProfileState,
  error: ?string,
};

export const initialUserState: UserState = {
  id: null,
  email: null,
  error: null,
  profile: initialProfileState,
};

export default initialUserState;
