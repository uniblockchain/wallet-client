// @flow
import { createRoutine, bindRoutineToReduxForm } from 'redux-saga-routines';

export const sendRoutine = createRoutine('SEND');
export const clearRoutine = createRoutine('CLEAR');
export const sendFormSubmitHandler = bindRoutineToReduxForm(sendRoutine);
