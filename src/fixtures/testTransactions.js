// @flow
import type { MonetaryValues, Transaction } from '../wallet/walletState';

export const testBalance: MonetaryValues = [
  { currency: 'ETH', value: 0.9 },
  { currency: 'EUR', value: 227.9376254547 },
];

export const testTransactions: Array<Transaction> = [
  {
    id: '59de0dc0bf519ed707b12cb7caf746a2',
    status: 'COMPLETED',
    date: new Date('2017-10-11T12:25:45.803Z'),
    fee: testBalance,
    value: testBalance,
    address: '0x51720690acf7469f9cac4362bd4440ec3ee44550',
    currency: 'ETH',
    transactionId:
      '0xd9b56817f5b5b0a8afd261cb6e38872983a845e067d228ea3a803c8e86c9a19e',
  },
  {
    id: '59de09c8e5a485e707a4ddbce9e92ae1',
    status: 'COMPLETE',
    date: new Date('2017-10-11T12:08:40.905Z'),
    fee: testBalance,
    value: testBalance,
    address: '0x51720690acf7469f9cac4362bd4440ec3ee44550',
    currency: 'ETH',
    transactionId:
      '0xd9b56817f5b5b0a8afd261cb6e38872983a845e067d228ea3a803c8e86c9a19e',
  },
];
