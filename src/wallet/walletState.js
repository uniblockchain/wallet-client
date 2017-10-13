// @flow

export type TransactionEntry = {
  +address: string,
  +value: number,
};

export type Transaction = {
  +id: number,
  +state: string,
  +date: Date,
  +entries: Array<TransactionEntry>,
};

export type Wallet = {
  +id: ?number,
  +address: ?string,
  +coin: ?string,
  +balance: ?number,
  +transactions: ?Array<Transaction>,
};

export type WalletState = {
  wallets: Array<Wallet>,
};

export const initialWalletState: WalletState = {
  wallets: [],
};

export default initialWalletState;
