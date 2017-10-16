// @flow

import userReducer from './userReducer';
import userActions from './userActions';
import { type UserState, initialUserState } from './userState';

describe('user reducer', () => {
  const user: UserState = { id: 1, email: 'erko@risthein.ee' };
  const error = 'whoops';

  describe('handles user fetch', () => {
    it('request', () => {
      const action = userActions.userFetchRequested();
      const newState = userReducer(initialUserState, action);
      expect(newState).toEqual(initialUserState);
    });

    it('success', () => {
      const action = userActions.userFetchSucceeded(user);
      const newState = userReducer(initialUserState, action);
      expect(newState.id).toEqual(user.id);
      expect(newState.email).toEqual(user.email);
    });

    it('fail', () => {
      const action = userActions.userFetchFailed(error);
      const newState = userReducer(initialUserState, action);
      expect(newState.error).toEqual(error);
    });
  });

  describe('handles user creation', () => {
    it('request', () => {
      const action = userActions.userCreationRequested();
      const newState = userReducer(initialUserState, action);
      expect(newState).toEqual(initialUserState);
    });

    it('success', () => {
      const action = userActions.userCreationSucceeded(user);
      const newState = userReducer(initialUserState, action);
      expect(newState.id).toEqual(user.id);
      expect(newState.email).toEqual(user.email);
    });

    it('fail', () => {
      const action = userActions.userCreationFailed(error);
      const newState = userReducer(initialUserState, action);
      expect(newState.error).toEqual(error);
    });
  });
});
