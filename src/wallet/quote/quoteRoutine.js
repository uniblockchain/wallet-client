// @flow
import { createRoutine } from 'redux-saga-routines';

export const quoteRoutine = createRoutine('QUOTE');
export const clearRoutine = createRoutine('QUOTE_CLEAR');

export default quoteRoutine;
