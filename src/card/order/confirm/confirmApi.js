// @flow

import config from 'react-global-configuration';
import { post } from '../../../http';

const createOrder = (walletId: number): Promise<void> =>
  post(`${config.get('apiUrl')}/v1/card-order`, walletId);

export default { createOrder };
