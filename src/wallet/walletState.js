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
  +id: string,
  +status: string,
  +date: Date,
  +currency: string,
  +fee: MonetaryValues,
  +value: MonetaryValues,
  +address: ?string,
  +entries: Array<TransactionEntry>,
};

export type WalletType = {
  id: number,
  address: string,
  currency: string,
  balance: MonetaryValues,
  transactions: Array<Transaction>,
  receiveAddress: string,
};

export class Wallet {
  id: number;
  address: string;
  currency: string;
  balance: MonetaryValues;
  transactions: Array<Transaction>;
  receiveAddress: string;

  constructor(wallet: WalletType) {
    this.id = wallet.id;
    this.address = wallet.address;
    this.currency = wallet.currency;
    this.balance = wallet.balance;
    this.transactions = wallet.transactions;
    this.receiveAddress = wallet.receiveAddress;
  }

  getBalance = () =>
    this.balance
      .filter(it => it.currency === this.currency)
      .map(it => it.value)[0];

  hasBalance = () => this.getBalance() > 0;

  getRepresentationalBalance = (representationalCurrency: string) =>
    this.balance
      .filter(it => it.currency === representationalCurrency)
      .map(it => it.value)[0];
}

export type WalletState = {
  wallets: Array<WalletType>,
  currency: string,
  error: ?string,
  activeId: ?number,
  isLoading: boolean,
};

export const initialWalletState: WalletState = {
  wallets: [],
  currency: 'EUR',
  error: null,
  activeId: null,
  isLoading: false,
};

export default initialWalletState;
