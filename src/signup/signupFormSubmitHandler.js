// @flow
import { bindRoutineToReduxForm } from 'redux-saga-routines';
import { creationRoutine } from '../user';

export default bindRoutineToReduxForm(creationRoutine);
