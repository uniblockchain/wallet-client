// @flow

import config from 'react-global-configuration';

const DEFAULT_CONF = {
  googleMapsKey: 'AIzaSyC5hizdMNKn1sLOUdmrCSeSgSsJfl7acO4',
};

const DEFAULT_CONF_DEV = {
  ...DEFAULT_CONF,
  apiUrl: '',
  oauth2ClientId: 'wallet-client',
  oauth2Secret: 'WalletClientSecret',
  mixpanelToken: 'none',
};

const DEFAULT_CONF_STAGING = {
  ...DEFAULT_CONF,
  apiUrl: 'https://staging-api.getchange.com',
  oauth2ClientId: 'wallet-client',
  oauth2Secret: 'WalletClientSecret',
  mixpanelToken: 'none',
};

const DEFAULT_CONF_PRODUCTION = {
  ...DEFAULT_CONF,
  apiUrl: 'https://api.getchange.com',
  oauth2ClientId: 'wallet-client',
  oauth2Secret: 'WalletClientSecret',
  mixpanelToken: 'eda8215eea75dc2a02b6fce287d0e144',
};

export default function initialize(): void {
  const env = process.env.REACT_APP_ENV || process.env.NODE_ENV;
  if (env === 'development') {
    config.set(DEFAULT_CONF_DEV, { freeze: false });
  } else if (env === 'staging') {
    config.set(DEFAULT_CONF_STAGING, { freeze: false });
  } else if (env === 'production') {
    config.set(DEFAULT_CONF_PRODUCTION, { freeze: false });
  }
}
