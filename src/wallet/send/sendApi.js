// @flow

import config from 'react-global-configuration';
import { post } from '../../http/index';

export type SendTransactionResponse = {
  transactionStatus: string,
};

const sendTransaction = (
  address: string,
  amount: number,
  fromWalletId: number,
): Promise<SendTransactionResponse> =>
  post(`${config.get('apiUrl')}/v1/wallet/${fromWalletId}/send`, {
    address,
    amount,
  });

export default { sendTransaction };
