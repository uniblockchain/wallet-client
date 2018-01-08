// @flow
import { call, put } from 'redux-saga/effects';
import { getSendFee, getCardOrderFee } from './feeSagas';
import { sendFeeRoutine, cardOrderFeeRoutine } from './feeRoutines';
import feeApi from './feeApi';
import { pageActions } from '../../page';
import { testWallet } from '../../fixtures';

describe('fee sagas', () => {
  it('fetches send fee', () => {
    const sendToAddress = '0xlolwat';
    const amountInCrypto = 100.5;
    const activeWallet = testWallet;
    const values = { sendToAddress, amountInCrypto, activeWallet };
    const generator = getSendFee(sendFeeRoutine(values));

    expect(generator.next().value).toEqual(put(pageActions.showProgress(true)));
    expect(generator.next().value).toEqual(put(sendFeeRoutine.request()));
    expect(generator.next().value).toEqual(
      call(feeApi.sendFee, sendToAddress, amountInCrypto, activeWallet.id),
    );
    expect(generator.next().value).toEqual(put(sendFeeRoutine.success()));
    expect(generator.next().value).toEqual(
      put(pageActions.showProgress(false)),
    );
    expect(generator.next().done).toBeTruthy();
  });
  it('fetches card order fee', () => {
    const activeWallet = testWallet;
    const values = { activeWallet };
    const generator = getCardOrderFee(cardOrderFeeRoutine(values));

    expect(generator.next().value).toEqual(put(pageActions.showProgress(true)));
    expect(generator.next().value).toEqual(put(cardOrderFeeRoutine.request()));
    expect(generator.next().value).toEqual(
      call(feeApi.cardOrderFee, activeWallet.id),
    );
    expect(generator.next().value).toEqual(put(cardOrderFeeRoutine.success()));
    expect(generator.next().value).toEqual(
      put(pageActions.showProgress(false)),
    );
    expect(generator.next().done).toBeTruthy();
  });
});
