// @flow

import config from 'react-global-configuration';
import type { MonetaryValue } from '../walletState';
import { put } from '../../http';

function sendFee(
  address: string,
  amount: number,
  fromWalletId: number,
): Promise<Array<MonetaryValue>> {
  return put(`${config.get('apiUrl')}/v1/wallets/${fromWalletId}/fee`, {
    address,
    amount,
  });
}

function cardOrderFee(fromWalletId: number): Promise<Array<MonetaryValue>> {
  return put(`${config.get('apiUrl')}/v1/me/card-order/fee`, {
    walletId: fromWalletId,
  });
}

export default { sendFee, cardOrderFee };
