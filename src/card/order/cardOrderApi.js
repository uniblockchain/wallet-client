// @flow

import config from 'react-global-configuration';
import { post, get } from '../../http';

const createOrder = (): Promise<void> =>
  post(`${config.get('apiUrl')}/v1/me/card-order`);

const hasOrder = (): Promise<boolean> =>
  get(`${config.get('apiUrl')}/v1/me/card-order`);

export default { createOrder, hasOrder };
