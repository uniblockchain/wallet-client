// @flow

import config from 'react-global-configuration';
import { post } from '../http';

function registerInterest(): Promise<void> {
  return post(`${config.get('apiUrl')}/v1/card-interest`);
}

export default { registerInterest };
