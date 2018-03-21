// @flow

import config from 'react-global-configuration';
import { post } from '../http';

export type VerificationType = {
  userId: number,
  id: number,
  externalId: string,
  status: string,
  checks: Array<any>,
};

const createVerification = (userId: number): Promise<void> =>
  post(`${config.get('apiUrl')}/v1/me/verification`, { userId });

export default { createVerification };
