// @flow
import type {
  MonetaryValues,
  Transaction,
  TransactionEntry,
} from '../wallet/walletState';

export const testBalance: MonetaryValues = [
  { currency: 'ETH', value: 0.9 },
  { currency: 'EUR', value: 227.9376254547 },
];

export const testEntriesValue: MonetaryValues = [
  {
    currency: 'ETH',
    value: -0.9,
  },
  {
    currency: 'EUR',
    value: -250.332,
  },
];

export const testEntries: Array<TransactionEntry> = [
  {
    address: '0x1be74bc35c5b9e95ebaa40ac7a35cccd0f52f5a1',
    value: testEntriesValue,
    currentWallet: true,
  },
  {
    address: '0x3c12ae77e4ff9f1f50fe53880d3b62f4a3e8a4ec',
    value: testEntriesValue,
    currentWallet: false,
  },
];

export const testTransactions: Array<Transaction> = [
  {
    id: '59de0dc0bf519ed707b12cb7caf746a2',
    status: 'COMPLETED',
    date: new Date('2017-10-11T12:25:45.803Z'),
    fee: testBalance,
    value: testBalance,
    address: '0x51720690acf7469f9cac4362bd4440ec3ee44550',
    entries: testEntries,
    currency: 'ETH',
  },
  {
    id: '59de09c8e5a485e707a4ddbce9e92ae1',
    status: 'COMPLETE',
    date: new Date('2017-10-11T12:08:40.905Z'),
    fee: testBalance,
    value: testBalance,
    address: '0x51720690acf7469f9cac4362bd4440ec3ee44550',
    entries: testEntries,
    currency: 'ETH',
  },
];
