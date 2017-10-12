// @flow

import config from 'react-global-configuration';

const DEFAULT_CONF_DEV = {
  apiUrl: 'http://localhost:8080/v1',
};

const DEFAULT_CONF_PRODUCTION = {
  apiUrl: 'https://change-wallet-service.producement.com/v1',
};

export default function initialize(): void {
  if (process.env.NODE_ENV === 'development') {
    config.set(DEFAULT_CONF_DEV, { freeze: false });
  }

  if (process.env.NODE_ENV === 'production') {
    config.set(DEFAULT_CONF_PRODUCTION, { freeze: false });
  }
}
