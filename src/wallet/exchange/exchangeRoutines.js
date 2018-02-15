// @flow
import { createRoutine, bindRoutineToReduxForm } from 'redux-saga-routines';

export const exchangeRoutine = createRoutine('EXCHANGE');
export const exchangeFormSubmitHandler = bindRoutineToReduxForm(
  exchangeRoutine,
);

export default exchangeRoutine;
