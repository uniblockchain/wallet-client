// @flow
import { createRoutine, bindRoutineToReduxForm } from 'redux-saga-routines';

export const fetchRoutine = createRoutine('PROFILE_FETCH');
export const creationRoutine = createRoutine('PROFILE_CREATION');
export const profileFormSubmitHandler = bindRoutineToReduxForm(creationRoutine);
