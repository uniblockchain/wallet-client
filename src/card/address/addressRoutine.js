// @flow
import { createRoutine, bindRoutineToReduxForm } from 'redux-saga-routines';

const addressRoutine = createRoutine('ADDRESS');
export const addressFormSubmitHandler = bindRoutineToReduxForm(addressRoutine);

export default addressRoutine;
