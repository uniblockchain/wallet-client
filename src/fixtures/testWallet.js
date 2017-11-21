// @flow
import { type WalletType } from '../wallet/walletState';

const wallet: WalletType = {
  id: 1,
  currency: 'BTC',
  address: '',
  transactions: [],
  receiveAddress: '2MvpyDrvrV3PNRTD8cBX9Hy97s7NtBSGfEN',
  balance: [
    {
      value: 0.19890018,
      currency: 'BTC',
    },
    {
      value: 1257.71,
      currency: 'EUR',
    },
  ],
};

export default wallet;
