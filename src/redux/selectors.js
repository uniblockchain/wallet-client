// @flow
import { createSelector } from 'reselect';
import type { Wallet } from '../wallet';

const getActiveWalletId = state => state.wallet.activeId;

const getWallets = state => state.wallet.wallets;

export const getActiveWallet = createSelector(
  [getWallets, getActiveWalletId],
  (wallets: Array<Wallet>, activeWalletId: Number) => {
    if (wallets.length) {
      if (activeWalletId) {
        return wallets.find(wallet => wallet.id === activeWalletId);
      }
      return wallets[0];
    }
    return null;
  },
);

export default { getActiveWallet };
