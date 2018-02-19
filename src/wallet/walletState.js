// @flow

export type MonetaryValue = {
  +value: number,
  +currency: string,
};

export type MonetaryValues = Array<MonetaryValue>;

export type MonetaryValuesMap = {
  +[string]: number,
};

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
  +transactionId: string,
};

export type WalletType = {
  id: number,
  address: string,
  currency: string,
  transactions: Array<Transaction>,
  receiveAddress: string,
};

export class Wallet {
  id: number;
  address: string;
  currency: string;
  balance: MonetaryValuesMap;
  transactions: Array<Transaction>;
  receiveAddress: string;

  constructor(wallet: WalletType) {
    this.id = wallet.id;
    this.address = wallet.address;
    this.currency = wallet.currency;
    this.transactions = wallet.transactions;
    this.receiveAddress = wallet.receiveAddress;
    this.balance = this.calculateBalance();
  }

  calculateBalance = () => {
    const balance = {};
    this.transactions.forEach(transaction => {
      transaction.value.forEach(value => {
        const existing = balance[value.currency];
        if (!existing) {
          balance[value.currency] = 0;
        }
        balance[value.currency] += value.value;
      });
    });
    return balance;
  };

  getBalance = () => {
    return this.balance[this.currency] || 0;
  };

  hasBalance = () => this.getBalance() > 0;

  getRepresentationalBalance = (representationalCurrency: string) =>
    this.balance[representationalCurrency] || 0;
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
