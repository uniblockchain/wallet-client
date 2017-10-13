// @flow

import walletReducer from './walletReducer';
import Wallet from './Wallet';
import walletSagas from './walletSagas';

export { default as walletReducer } from './walletReducer';
export { default as walletSagas } from './walletSagas';

export { default as Wallet } from './Wallet';

export default { Wallet, walletReducer, walletSagas };
