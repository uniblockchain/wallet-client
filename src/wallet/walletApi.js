// @flow

import config from 'react-global-configuration';
import { get } from '../http';

import type { WalletState } from './walletState';

function fetchWallet(): Promise<WalletState> {
  return get(`${config.get('apiUrl')}/wallet`);
}

export default { fetchWallet };
