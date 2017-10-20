// @flow

export type MonetaryValue = {
  +value: number,
  +currency: string,
};

export type MonetaryValues = Array<MonetaryValue>;

export type TransactionEntry = {
  +address: string,
  +value: MonetaryValues,
  +currentWallet: boolean,
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
  +currency: string,
  +balance: MonetaryValues,
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
