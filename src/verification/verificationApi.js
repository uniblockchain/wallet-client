// @flow

import config from 'react-global-configuration';
import { post, get } from '../http';

export type VerificationType = {
  status: string,
};

export const createVerification = (userId: number): Promise<void> =>
  post(`${config.get('apiUrl')}/v1/users/${userId}/verifications`);

export const getSuccessfulVerifications = (
  userId: number,
): Promise<Array<VerificationType>> =>
  get(
    `${config.get('apiUrl')}/v1/users/${userId}/verifications?status=SUCCESS`,
  );
