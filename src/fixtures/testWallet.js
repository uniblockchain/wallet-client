// @flow
import { Wallet } from '../wallet/walletState';
import { testTransactions, testBalance } from './testTransactions';

const wallet = new Wallet({
  id: 1,
  currency: 'BTC',
  address: '',
  transactions: testTransactions,
  receiveAddress: '2MvpyDrvrV3PNRTD8cBX9Hy97s7NtBSGfEN',
  balance: testBalance,
});

export default wallet;
