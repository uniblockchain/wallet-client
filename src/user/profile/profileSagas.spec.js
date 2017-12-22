// @flow

import { call, put } from 'redux-saga/effects';
import moment from 'moment-es6';
import { creationRoutine, fetchRoutine } from './profileRoutines';
import profileApi from './profileApi';
import { createProfile, fetchProfile } from './profileSagas';
import type { Profile } from './profileState';

describe('profile sagas', () => {
  it('can create profile', () => {
    const profile: Profile = {
      id: null,
      firstName: 'Jordan',
      lastName: 'Valdma',
      dateOfBirth: moment.utc('1908-02-01'),
      mobileNumber: '+3725555555',
      address: null,
    };

    const profileFormValues: * = {
      id: null,
      firstName: 'Jordan',
      lastName: 'Valdma',
      day: '01',
      month: '02',
      year: '1908',
      mobileNumber: '+3725555555',
    };

    const generator = createProfile(
      creationRoutine({ values: profileFormValues }),
    );

    expect(generator.next().value).toEqual(
      call(profileApi.createOrUpdateProfile, profile),
    );
    expect(generator.next(profile).value).toEqual(
      put(creationRoutine.success(profile)),
    );
    expect(generator.next().done).toBeTruthy();
  });

  it('can fetch profile', () => {
    const profile: Profile = {
      id: null,
      firstName: 'Jordan',
      lastName: 'Valdma',
      dateOfBirth: moment.utc('1908-02-01'),
      mobileNumber: '+3725555555',
      address: null,
    };

    const generator = fetchProfile(fetchRoutine());

    expect(generator.next().value).toEqual(call(profileApi.fetchProfile));
    expect(generator.next(profile).value).toEqual(
      put(fetchRoutine.success(profile)),
    );
    expect(generator.next().done).toBeTruthy();
  });
});
