// @flow

import config from 'react-global-configuration';
import { post } from '../../http';
import { authHash, type OauthToken } from '../loginApi';

const loginFormData = (token: string): string => {
  const formBody = [];
  formBody.push(
    `${encodeURIComponent('grant_type')}=${encodeURIComponent(
      'verification-auth-to-oauth',
    )}`,
  );
  formBody.push(`${encodeURIComponent('token')}=${encodeURIComponent(token)}`);
  return formBody.join('&');
};

function login(verificationOauthToken: string): Promise<OauthToken> {
  return post(
    `${config.get('apiUrl')}/oauth/token`,
    loginFormData(verificationOauthToken),
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
