// @flow

export type ValueWithCurrency = {
  +currency: string,
  +value: number,
};

export type Value = Array<ValueWithCurrency>;

export type TransactionEntry = {
  +address: string,
  +value: Value,
};

export type Transaction = {
  +id: number,
  +state: string,
  +date: Date,
  +entries: Array<TransactionEntry>,
};

export type Wallet = {
  +id: number,
  +address: string,
  +coin: string,
  +balance: Value,
  +transactions: Array<Transaction>,
};

export type WalletState = {
  wallets: Array<Wallet>,
  currency: string,
  error: ?string,
};

export const initialWalletState: WalletState = {
  wallets: [],
  currency: 'EUR',
  error: null,
};

export default initialWalletState;
