// @flow

export type UserState = {
  +id: number,
  +email: string,
};

export const initialUserState: UserState = {
  id: 0,
  email: '',
};

export default initialUserState;
