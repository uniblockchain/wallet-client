// @flow
import { bindRoutineToReduxForm, createRoutine } from 'redux-saga-routines';

export const resetPasswordRoutine = createRoutine('USER_RESET_PASSWORD');
export const resetPasswordFormSubmitHandler = bindRoutineToReduxForm(
  resetPasswordRoutine,
);
