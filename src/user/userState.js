// @flow

export type UserState = {
  +id: ?number,
  +email: ?string,
};

export const initialUserState: UserState = {
  id: null,
  email: null,
};

export default initialUserState;
