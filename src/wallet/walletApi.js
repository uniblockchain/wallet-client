// @flow

import config from 'react-global-configuration';
import { get } from '../http';

import type { Transaction, Value, Wallet, WalletState } from './walletState';

function fetchWalletBalance(walletId: number): Promise<number> {
  return get(`${config.get('apiUrl')}/wallet/${walletId}/balance`);
}

function fetchWalletTransactions(walletId: number): Promise<number> {
  return get(`${config.get('apiUrl')}/wallet/${walletId}/transaction`);
}

function coinToCurrency(
  coin: string,
  currency: string,
  coinNominalValue: number,
): number {
  return coinNominalValue * 0.0000000000015;
}

function getValueWithCurrencies(coin: string, nominalValue: number): Value {
  return [
    {
      currency: coin,
      value: nominalValue,
    },
    {
      currency: 'EUR',
      value: coinToCurrency(coin, 'EUR', nominalValue),
    },
  ];
}

function addCurrencyValues(walletsWithNominalValues: Array<{}>): Array<Wallet> {
  return walletsWithNominalValues.map(
    // $FlowFixMe
    (wallet: { coin: string, balance: number, transactions: Array<> }) => ({
      ...wallet,
      balance: getValueWithCurrencies(wallet.coin, wallet.balance),
      transactions: wallet.transactions.map((transaction: Transaction) => ({
        ...transaction,
        entries: transaction.entries.map((entry: any) => ({
          ...entry,
          value: getValueWithCurrencies(wallet.coin, entry.value),
        })),
      })),
    }),
  );
}

function fetchWallet(): Promise<WalletState> {
  return get(`${config.get('apiUrl')}/wallet`).then(wallets =>
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
              transactions,
            })),
          ),
      ),
    )
      .then((walletsWithNominalValues: Array<{}>) =>
        addCurrencyValues(walletsWithNominalValues),
      )
      .then(wallets => ({
        wallets,
      })),
  );
}

export default { fetchWallet };
