// @flow

import config from 'react-global-configuration';
import { get, post, put } from '../../http';

import type { Profile } from './profileState';

function fetchProfile(): Promise<Profile> {
  return get(`${config.get('apiUrl')}/v1/me/profile`);
}

function createOrUpdateProfile(profile: Profile): Promise<Profile> {
  if (profile.id) {
    return put(`${config.get('apiUrl')}/v1/me/profile`, {
      ...profile,
    });
  }
  return post(`${config.get('apiUrl')}/v1/me/profile`, {
    ...profile,
  });
}

export default { fetchProfile, createOrUpdateProfile };
