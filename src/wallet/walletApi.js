// @flow

import config from 'react-global-configuration';
import { get } from '../http';

import type { WalletState } from './walletState';

function fetchWalletBalance(walletId: number): Promise<number> {
  return get(`${config.get('apiUrl')}/v1/wallet/${walletId}/balance`);
}

function fetchWalletTransactions(walletId: number): Promise<number> {
  return get(`${config.get('apiUrl')}/v1/wallet/${walletId}/transaction`);
}

function fetchWallet(): Promise<WalletState> {
  return get(`${config.get('apiUrl')}/v1/wallet`).then(wallets =>
    Promise.all(
      wallets.map(wallet =>
        fetchWalletBalance(wallet.id)
          .then(balance => ({
            ...wallet,
            balance,
          }))
          .then(wallet =>
            fetchWalletTransactions(wallet.id).then(transactions => ({
              ...wallet,
              // $FlowFixMe
              transactions: transactions.map(transaction => ({
                ...transaction,
                date: new Date(transaction.date),
              })),
            })),
          ),
      ),
    ).then(wallets => ({
      wallets,
    })),
  );
}

export default { fetchWallet };
