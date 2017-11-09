// @flow
import { createSelector } from 'reselect';
import { Wallet } from '../wallet/walletState';

const getActiveWalletId = state => state.wallet.activeId;

const getWallets = state => state.wallet.wallets;

export const getActiveWallet = createSelector(
  [getWallets, getActiveWalletId],
  (wallets: Array<Wallet>, activeWalletId: Number): ?Wallet => {
    if (wallets.length) {
      if (activeWalletId) {
        const wallet = wallets.find(w => w.id === activeWalletId);
        if (wallet) {
          return new Wallet(wallet);
        }
      }
      return new Wallet(wallets[0]);
    }
    return null;
  },
);

export default { getActiveWallet };
