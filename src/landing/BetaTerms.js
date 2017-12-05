// @flow
import React from 'react';

import { Page, Heading, Body } from './Page';

export const BetaTerms = () => (
  <Page>
    <Heading>Beta Terms</Heading>
    <Body>
      <p>
        Please take note that this is a closed beta release of the Change web
        app, which is currently undergoing thorough testing before its release
        to the public. The software is offered on an “as is” and “as availalbe”
        basis. Change does not give any warranties, whether express or implied,
        as to the functionality and usability of the app.
      </p>
      <p>
        Change will not be liable for any damage or loss, whether such loss is
        direct or indirect, consequential or special, suffered by any party as a
        result of using the Change app.
      </p>
      <p>
        Sending, receiving and handling cryptocurrencies in the app is performed
        at the user’s own risk and the user is solely responsible for any loss
        of funds or damage to any computer system or loss of data that results
        from using the Change app.
      </p>
      <p>
        DO NOT send any funds to the Change wallet that you are not willing to
        lose.
      </p>
      <p>
        Should you encounter any bugs, glitches, lack of functionality or other
        problems on the website, please contact us on email:
        gustav@getchange.com.
      </p>
    </Body>
  </Page>
);

export default BetaTerms;
