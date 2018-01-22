// @flow

import config from 'react-global-configuration';
import { post } from '../http';

export type OauthToken = {
  access_token: string,
  token_type: string,
  expires_in: number,
  scope: string,
  expirationTime: Date,
};

export const authHash = () =>
  btoa(`${config.get('oauth2ClientId')}:${config.get('oauth2Secret')}`);

const loginFormData = (username: string, password: string): string => {
  const formBody = [];
  formBody.push(
    `${encodeURIComponent('grant_type')}=${encodeURIComponent('password')}`,
  );
  formBody.push(`${encodeURIComponent('scope')}=${encodeURIComponent('all')}`);
  formBody.push(
    `${encodeURIComponent('username')}=${encodeURIComponent(username)}`,
  );
  formBody.push(
    `${encodeURIComponent('password')}=${encodeURIComponent(password)}`,
  );
  return formBody.join('&');
};

function login(username: string, password: string): Promise<OauthToken> {
  return post(
    `${config.get('apiUrl')}/oauth/token`,
    loginFormData(username, password),
    {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${authHash()}`,
    },
  ).then(token => {
    const expirationTime = new Date();
    expirationTime.setSeconds(expirationTime.getSeconds() + token.expires_in);
    return {
      ...token,
      expirationTime,
    };
  });
}

export default { login };
