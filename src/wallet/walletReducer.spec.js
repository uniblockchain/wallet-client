// @flow

import walletReducer from './walletReducer';
import walletActions from './walletActions';
import { type WalletState, Wallet } from './walletState';

describe('wallet reducer', () => {
  const currentState: WalletState = {
    wallets: [],
    currency: 'EUR',
    error: null,
    activeId: null,
    isLoading: false,
  };
  const wallet: WalletState = {
    wallets: [
      new Wallet({
        id: 1,
        address: '59dcc2c2e2d55fcb075e09e8dc5d2723',
        currency: 'ETH',
        transactions: [],
        receiveAddress: '0xlolwat',
      }),
    ],
    currency: 'EUR',
    error: null,
    activeId: null,
    isLoading: false,
  };

  const error = 'whoops';

  it('handles wallet fetch request', () => {
    const action = walletActions.walletFetchRequested();
    const newState = walletReducer(currentState, action);
    expect(newState).toEqual({ ...currentState, isLoading: true });
  });

  it('handles wallet fetch success', () => {
    const action = walletActions.walletFetchSucceeded(wallet);
    const newState = walletReducer(currentState, action);
    expect(newState.wallets[0].id).toEqual(wallet.wallets[0].id);
    expect(newState.wallets[0].address).toEqual(wallet.wallets[0].address);
    expect(newState.wallets[0].currency).toEqual(wallet.wallets[0].currency);
    expect(newState.activeId).toEqual(newState.wallets[0].id);
  });

  it('wallet fetch success does not overwrite activeId if it exists', () => {
    const activeId = 7;
    const action = walletActions.walletFetchSucceeded(wallet);
    const newState = walletReducer({ ...currentState, activeId }, action);
    expect(newState.activeId).toEqual(activeId);
  });

  it('handles wallet fetch fail', () => {
    const action = walletActions.walletFetchFailed(error);
    const newState = walletReducer(currentState, action);
    expect(newState.error).toEqual(error);
  });

  it('can set active wallet id', () => {
    const id = 123;
    const action = walletActions.walletSetActive(id);
    const newState = walletReducer(currentState, action);
    expect(newState.activeId).toEqual(id);
  });
});
