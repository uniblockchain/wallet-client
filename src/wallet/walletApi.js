// @flow

import config from 'react-global-configuration';
import { get } from '../http';

import type { WalletState } from './walletState';

// TODO: add proper Array<Transaction> type instead of *
function fetchWalletTransactions(walletId: number): Promise<*> {
  return get(`${config.get('apiUrl')}/v1/wallets/${walletId}/transactions`);
}

function fetchWallet(): Promise<WalletState> {
  return get(`${config.get('apiUrl')}/v1/wallets`).then(response =>
    Promise.all(
      response.map(wallet =>
        fetchWalletTransactions(wallet.id).then(transactions => ({
          ...wallet,
          transactions: transactions.map(transaction => ({
            ...transaction,
            date: new Date(transaction.date),
            currency: wallet.currency,
          })),
        })),
      ),
    ).then(wallets => ({
      wallets,
    })),
  );
}

export default { fetchWallet };
