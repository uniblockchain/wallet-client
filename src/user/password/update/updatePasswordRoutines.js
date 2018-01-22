// @flow
import { bindRoutineToReduxForm } from 'redux-saga-routines';
import { creationRoutine } from '../../userRoutines';

export const updatePassword = bindRoutineToReduxForm(creationRoutine);
export default updatePassword;
