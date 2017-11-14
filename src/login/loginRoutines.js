// @flow
import { createRoutine, bindRoutineToReduxForm } from 'redux-saga-routines';

export const loginRoutine = createRoutine('LOGIN');
export const logoutRoutine = createRoutine('LOGOUT');
export const loginFormSubmitHandler = bindRoutineToReduxForm(loginRoutine);
