// @flow

import config from 'react-global-configuration';
import { post } from '../http';

export type VerificationType = {
  status: string,
};

const createVerification = (userId: number): Promise<void> =>
  post(`${config.get('apiUrl')}/v1/users/verification`, { userId });

export default { createVerification };
