// @flow

import config from 'react-global-configuration';
import { post } from '../../http';

const registerInterest = (): Promise<void> =>
  post(`${config.get('apiUrl')}/v1/card-interest`);

export default { registerInterest };
