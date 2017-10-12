// @flow

import walletReducer from './walletReducer';
import walletActions from './walletActions';
import type { WalletState } from './walletState';

describe('wallet reducer', () => {
  const currentState: WalletState = { wallets: [] };
  const wallet: WalletState = {
    wallets: [
      {
        id: 1,
        address: '59dcc2c2e2d55fcb075e09e8dc5d2723',
        coin: 'ETH',
      },
    ],
  };
  const error = 'whoops';

  it('handles wallet fetch request', () => {
    const action = walletActions.walletFetchRequested();
    const newState = walletReducer(currentState, action);
    expect(newState).toEqual(currentState);
  });

  it('handles wallet fetch success', () => {
    const action = walletActions.walletFetchSucceeded(wallet);
    const newState = walletReducer(currentState, action);
    expect(newState.wallets[0].id).toEqual(wallet.wallets[0].id);
    expect(newState.wallets[0].address).toEqual(wallet.wallets[0].address);
    expect(newState.wallets[0].coin).toEqual(wallet.wallets[0].coin);
  });

  it('handles wallet fetch fail', () => {
    const action = walletActions.walletFetchFailed(error);
    const newState = walletReducer(currentState, action);
    expect(newState.error).toEqual(error);
  });
});
