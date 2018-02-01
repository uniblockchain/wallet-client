// @flow

import config from 'react-global-configuration';
import { put } from '../../http/index';

export type SecretHolder = {
  secret: string,
};

function createNewSecret(password: string): Promise<SecretHolder> {
  return put(`${config.get('apiUrl')}/v1/me/secret`, { password });
}

export default { createNewSecret };
