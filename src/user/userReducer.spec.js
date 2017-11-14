// @flow

import userReducer from './userReducer';
import { fetchRoutine, creationRoutine } from './userRoutines';
import { type UserState, initialUserState } from './userState';

describe('user reducer', () => {
  const user: UserState = { id: 1, email: 'erko@risthein.ee', error: null };
  const error = 'whoops';

  describe('handles user fetch', () => {
    it('request', () => {
      const action = fetchRoutine.trigger();
      const newState = userReducer(initialUserState, action);
      expect(newState).toEqual(initialUserState);
    });

    it('success', () => {
      const action = fetchRoutine.success(user);
      const newState = userReducer(initialUserState, action);
      expect(newState.id).toEqual(user.id);
      expect(newState.email).toEqual(user.email);
    });

    it('fail', () => {
      const action = fetchRoutine.failure(error);
      const newState = userReducer(initialUserState, action);
      expect(newState.error).toEqual(error);
    });
  });

  describe('handles user creation', () => {
    it('request', () => {
      const email = 'test@example.com';
      const password = 'test';
      const action = creationRoutine.trigger(email, password);
      const newState = userReducer(initialUserState, action);
      expect(newState).toEqual(initialUserState);
    });

    it('success', () => {
      const action = creationRoutine.success(user);
      const newState = userReducer(initialUserState, action);
      expect(newState.id).toEqual(user.id);
      expect(newState.email).toEqual(user.email);
    });

    it('fail', () => {
      const action = creationRoutine.failure(error);
      const newState = userReducer(initialUserState, action);
      expect(newState.error).toEqual(error);
    });
  });
});
