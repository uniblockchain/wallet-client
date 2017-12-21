// @flow

import config from 'react-global-configuration';
import type { Profile } from './profileState';

jest.mock('../../http');

const mockHttp = require('../../http');

const profileApi = require('./profileApi').default;

describe('user api', () => {
  const profile: Profile = {
    id: null,
    firstName: 'Jordan',
    lastName: 'Valdma',
    dateOfBirth: new Date(),
    mobileNumber: 'take me home',
    address: null,
  };

  const persistedProfile: Profile = {
    id: 1,
    firstName: 'Jordan',
    lastName: 'Valdma',
    dateOfBirth: new Date(),
    mobileNumber: 'take me home',
    address: null,
  };

  const apiUrl = 'sample-api-url';

  beforeAll(() => {
    config.set({ apiUrl });
  });

  it('fetches profile', () => {
    mockHttp.get = jest.fn(() => Promise.resolve(profile));

    return profileApi
      .fetchProfile()
      .then(response => expect(response).toEqual(profile));
  });

  it('creates profile', done => {
    mockHttp.post = jest.fn((url, input) => {
      expect(input).toEqual(profile);
      done();
    });

    return profileApi.createOrUpdateProfile(profile);
  });

  it('updates profile', done => {
    mockHttp.put = jest.fn((url, input) => {
      expect(input).toEqual(persistedProfile);
      done();
    });

    return profileApi.createOrUpdateProfile(persistedProfile);
  });
});
