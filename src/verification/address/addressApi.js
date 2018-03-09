// @flow

import config from 'react-global-configuration';
import { post, get, put } from '../../http';
import { type Address } from './addressState';

function createOrUpdateAddress(address: Address): Promise<Address> {
  if (address.id) {
    return put(`${config.get('apiUrl')}/v1/me/profile/address`, {
      ...address,
    });
  }
  return post(`${config.get('apiUrl')}/v1/me/profile/address`, {
    ...address,
  });
}

const getAddress = (address: Address): Promise<Address> =>
  get(`${config.get('apiUrl')}/v1/me/profile/address`, address);

export default { createOrUpdateAddress, getAddress };
