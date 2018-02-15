// @flow

import config from 'react-global-configuration';
import { post } from '../../http';
import { SendTransactionResponse } from '../send/sendApi';

const sendTransaction = (
  address: string,
  amount: number,
  fromWalletId: number,
): Promise<SendTransactionResponse> =>
  post(`${config.get('apiUrl')}/v1/wallets/${fromWalletId}/transactions`, {
    address,
    amount,
  });

export default { sendTransaction };
