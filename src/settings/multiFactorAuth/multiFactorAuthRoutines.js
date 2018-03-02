// @flow
import { createRoutine as createNewRoutine } from 'redux-saga-routines';

export const createSecretRoutine = createNewRoutine(
  '@multiFactorAuth/SECRET_CREATE',
);

export default createSecretRoutine;
