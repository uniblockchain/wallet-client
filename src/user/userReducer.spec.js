// @flow

import userReducer from './userReducer';
import userActions from './userActions';
import type { UserState } from './userState';

describe('user reducer', () => {
  const currentState: UserState = { id: 0, email: '' };
  const user: UserState = { id: 1, email: 'erko@risthein.ee' };
  const error = 'whoops';

  it('handles user fetch request', () => {
    const action = userActions.userFetchRequested();
    const newState = userReducer(currentState, action);
    expect(newState).toEqual(currentState);
  });

  it('handles user fetch success', () => {
    const action = userActions.userFetchSucceeded(user);
    const newState = userReducer(currentState, action);
    expect(newState.id).toEqual(user.id);
    expect(newState.email).toEqual(user.email);
  });

  it('handles user fetch fail', () => {
    const action = userActions.userFetchFailed(error);
    const newState = userReducer(currentState, action);
    expect(newState.error).toEqual(error);
  });
});
