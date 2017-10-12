// @flow

import config from 'react-global-configuration';
import { get } from '../http';

import type { WalletState } from './walletState';

function fetchWallet(): Promise<WalletState> {
  return get(`${config.get('apiUrl')}/wallet`).then(wallet =>
    Promise.all(
      wallet.wallets.map(wallet =>
        fetchWalletBalance(wallet.id).then(balance => ({
          ...wallet,
          balance,
        })),
      ),
    ),
  );
}

function fetchWalletBalance(walletId: number): Promise<number> {
  return get(`${config.get('apiUrl')}/wallet/${walletId}/balance`);
}

export default { fetchWallet };
