// @flow
import { createRoutine, bindRoutineToReduxForm } from 'redux-saga-routines';

const confirmRoutine = createRoutine('CONFIRM');
export const confirmFormSubmitHandler = bindRoutineToReduxForm(confirmRoutine);

export default confirmRoutine;
