// @flow

import config from 'react-global-configuration';
import { get } from '../http';

import type { WalletState } from './walletState';

function fetchWallet(): Promise<WalletState> {
  return get(`${config.get('apiUrl')}/v1/wallets?withTransactions=true`)
    .then(response =>
      response.map(wallet => ({
        ...wallet,
        transactions: wallet.transactions.map(transaction => ({
          ...transaction,
          date: new Date(transaction.date),
          currency: wallet.currency,
        })),
      })),
    )
    .then(wallets => ({
      wallets,
    }));
}

export default { fetchWallet };
