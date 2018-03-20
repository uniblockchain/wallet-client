// @flow

import config from 'react-global-configuration';
import { post } from '../http';

export type VerificationType = {
  status: string,
};

export const createVerification = (userId: number): Promise<void> =>
  post(`${config.get('apiUrl')}/v1/users/${userId}/verifications`, { userId });
