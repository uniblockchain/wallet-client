// @flow

import config from 'react-global-configuration';

const DEFAULT_CONF_DEV = {
  apiUrl: 'http://localhost:8080',
  oauth2ClientId: 'wallet-client',
  oauth2Secret: 'WalletClientSecret',
};

const DEFAULT_CONF_PRODUCTION = {
  apiUrl: 'https://change-wallet-service.producement.com',
  oauth2ClientId: 'wallet-client',
  oauth2Secret: 'WalletClientSecret',
};

export default function initialize(): void {
  if (process.env.NODE_ENV === 'development') {
    config.set(DEFAULT_CONF_DEV, { freeze: false });
  }

  if (process.env.NODE_ENV === 'production') {
    config.set(DEFAULT_CONF_PRODUCTION, { freeze: false });
  }
}
