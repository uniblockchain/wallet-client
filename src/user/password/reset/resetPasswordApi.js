// @flow

import config from 'react-global-configuration';
import { post } from '../../../http';

function resetPassword(email: string) {
  return post(`${config.get('apiUrl')}/v1/notifications`, {
    email,
    type: 'RESET_PASSWORD',
  });
}

export default { resetPassword };
