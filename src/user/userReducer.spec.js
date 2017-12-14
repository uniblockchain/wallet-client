// @flow

import userReducer from './userReducer';
import { fetchRoutine, creationRoutine } from './userRoutines';
import { type UserState, initialUserState } from './userState';
import { type ProfileState } from './profile/profileState';
import {
  fetchRoutine as fetchProfileRoutine,
  creationRoutine as createOrUpdateProfileRoutine,
} from './profile/profileRoutines';

describe('user reducer', () => {
  const profile: ProfileState = {
    id: 1,
    firstName: 'Jordan',
    lastName: 'Valdma',
    dateOfBirth: new Date('1908-02-01'),
    mobileNumber: '+3725555555',
    error: null,
  };

  const user: UserState = {
    id: 1,
    email: 'erko@risthein.ee',
    profile,
    error: null,
  };
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

  describe('handles profile fetch', () => {
    it('request', () => {
      const action = fetchProfileRoutine.trigger();
      const newState = userReducer(initialUserState, action);
      expect(newState).toEqual(initialUserState);
    });

    it('success', () => {
      const action = fetchProfileRoutine.success(profile);
      const newState = userReducer(initialUserState, action);
      expect(newState.profile.id).toEqual(profile.id);
      expect(newState.profile.firstName).toEqual(profile.firstName);
      expect(newState.profile.lastName).toEqual(profile.lastName);
      expect(newState.profile.dateOfBirth).toEqual(profile.dateOfBirth);
      expect(newState.profile.mobileNumber).toEqual(profile.mobileNumber);
    });

    it('fail', () => {
      const action = fetchProfileRoutine.failure(error);
      const newState = userReducer(initialUserState, action);
      expect(newState.profile.error).toEqual(error);
    });
  });

  describe('handles profile create or update', () => {
    it('success', () => {
      const action = createOrUpdateProfileRoutine.success(profile);
      const newState = userReducer(initialUserState, action);
      expect(newState.profile.id).toEqual(profile.id);
      expect(newState.profile.firstName).toEqual(profile.firstName);
      expect(newState.profile.lastName).toEqual(profile.lastName);
      expect(newState.profile.dateOfBirth).toEqual(profile.dateOfBirth);
      expect(newState.profile.mobileNumber).toEqual(profile.mobileNumber);
    });
  });
});
