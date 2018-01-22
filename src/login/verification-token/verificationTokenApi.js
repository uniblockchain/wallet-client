// @flow

import config from 'react-global-configuration';
import { post } from '../../http';
import { authHash, type OauthToken } from '../loginApi';

const loginFormData = (verificationToken: string): string => {
  const formBody = [];
  formBody.push(
    `${encodeURIComponent('grant_type')}=${encodeURIComponent(
      'verification-token',
    )}`,
  );
  formBody.push(
    `${encodeURIComponent('token')}=${encodeURIComponent(verificationToken)}`,
  );
  return formBody.join('&');
};

function login(verificationToken: string): Promise<OauthToken> {
  return post(
    `${config.get('apiUrl')}/oauth/token`,
    loginFormData(verificationToken),
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
