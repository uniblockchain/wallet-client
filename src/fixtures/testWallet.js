// @flow
import { Wallet } from '../wallet/walletState';
import { testTransactions } from './testTransactions';

const wallet = new Wallet({
  id: 1,
  currency: 'ETH',
  address: '',
  transactions: testTransactions,
  receiveAddress: '2MvpyDrvrV3PNRTD8cBX9Hy97s7NtBSGfEN',
});

export default wallet;
