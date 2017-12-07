// @flow

import config from 'react-global-configuration';
import { post } from '../../../http';

export type Address = {
  +streetAddress: string,
  +country: string,
  +postalCode: string,
  +city: string,
};

const createAddress = (address: Address): Promise<Address> =>
  post(`${config.get('apiUrl')}/v1/me/address`, address);

export default { createAddress };
