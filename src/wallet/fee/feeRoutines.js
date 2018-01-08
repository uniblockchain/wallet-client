// @flow
import { createRoutine } from 'redux-saga-routines';

export const sendFeeRoutine = createRoutine('SEND_FEE');
export const cardOrderFeeRoutine = createRoutine('CARD_ORDER_FEE');

export default { sendFeeRoutine, cardOrderFeeRoutine };
