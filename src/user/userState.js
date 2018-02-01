// @flow
import { initialProfileState } from './profile';
import { type ProfileState } from './profile/profileState';

export type User = {
  +id: ?number,
  +email: ?string,
  +password: ?string,
  isUsing2Fa: ?boolean,
};

export type UserState = {
  +id: ?number,
  +email: ?string,
  +profile: ProfileState,
  isUsing2Fa: ?boolean,
  error: ?string,
};

export const initialUserState: UserState = {
  id: null,
  email: null,
  error: null,
  profile: initialProfileState,
  isUsing2Fa: null,
};

export default initialUserState;
