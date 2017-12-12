// @flow

import config from 'react-global-configuration';
import { get, post } from '../../http';

import type { Profile } from './profileState';

function fetchProfile(): Promise<Profile> {
  return get(`${config.get('apiUrl')}/v1/me/profile`);
}

function createProfile(profile: Profile): Promise<Profile> {
  return post(`${config.get('apiUrl')}/v1/me/profile`, {
    ...profile,
  });
}

export default { fetchProfile, createProfile };
