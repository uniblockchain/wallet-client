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
};

export const initialWalletState: WalletState = {
  wallets: [],
};

export default initialWalletState;
