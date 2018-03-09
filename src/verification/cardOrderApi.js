// @flow

import config from 'react-global-configuration';
import { post, get } from '../http';

const createOrder = (): Promise<void> =>
  post(`${config.get('apiUrl')}/v1/me/card-orders`);

const hasOrder = (): Promise<boolean> =>
  get(`${config.get('apiUrl')}/v1/me/card-orders`);

export default { createOrder, hasOrder };
