// @flow
import { initialWalletState } from '../wallet/walletState';
import testWallet from './testWallet';

const walletState = {
  ...initialWalletState,
  wallets: [testWallet],
};

export default walletState;
