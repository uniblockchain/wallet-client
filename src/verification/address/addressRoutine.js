// @flow
import { createRoutine, bindRoutineToReduxForm } from 'redux-saga-routines';

export const createOrUpdateAddressRoutine = createRoutine(
  'CREATE_OR_UPDATE_ADDRESS',
);
export const fetchAddressRoutine = createRoutine('FETCH_ADDRESS');
export const addressFormSubmitHandler = bindRoutineToReduxForm(
  createOrUpdateAddressRoutine,
);
