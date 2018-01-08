// @flow
import { type FeeState, initialFeeState } from '../wallet/fee/feeReducer';

const fee: FeeState = {
  ...initialFeeState,
  fee: [
    {
      currency: 'ETH',
      value: -0.9,
    },
    {
      currency: 'EUR',
      value: -250.332,
    },
  ],
};

export default fee;
