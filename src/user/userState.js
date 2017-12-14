// @flow
import { initialProfileState } from './profile';

export type UserState = {
  +id: ?number,
  +email: ?string,
  error: ?string,
};

export const initialUserState: UserState = {
  id: null,
  email: null,
  error: null,
  profile: initialProfileState,
};

export default initialUserState;
