// @flow

import userReducer from './userReducer';
import userActions from './userActions';
import type { UserState } from './userState';

describe('user reducer', () => {
  const currentState: UserState = { id: 1, email: 'erko@risthein.ee' };

  it('handles user fetch request', () => {
    const action = userActions.userFetchRequested();
    const newState = userReducer(currentState, action);
    expect(newState).toEqual(currentState);
  });

  it('handles user fetch success', () => {
    const action = userActions.userFetchSucceeded();
    const newState = userReducer(currentState, action);
    expect(newState).toEqual(currentState);
  });

  it('handles user fetch fail', () => {
    const action = userActions.userFetchFailed();
    const newState = userReducer(currentState, action);
    expect(newState).toEqual(currentState);
  });
});
