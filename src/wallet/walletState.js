// @flow

export type Wallet = {
  +id: ?number,
  +address: ?string,
  +coin: ?string,
  +balance: ?number,
};

export type WalletState = {
  wallets: Array<Wallet>,
};

export const initialWalletState: WalletState = {
  wallets: [],
};

export default initialWalletState;
