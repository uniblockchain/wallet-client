// @flow
import React from 'react';

import { default as Page, Heading, Body } from './Page';

export const Legal = () => (
  <Page>
    <Heading>Terms & conditions</Heading>
    <Body>
      <p>
        These Terms constitute a legally binding agreement between the Company
        and each of the Users. Accepting these Terms and/or purchasing Change
        Tokens (including purchasing Change Tokens prior to the date of these
        Terms) means that you have fully agreed to all the terms and conditions
        herein. In addition to these Terms, each User is obliged to comply with
        the technical rules associated with the relevant smart contract.If you
        have any questions regarding these Terms or such technical rules, please
        contact us at support@getchange.com.
      </p>
      <p>
        IMPORTANT RESTRICTION: Citizens and residents of and persons located in
        Canada, Singapore or the United States of America (USA), as well as
        Puerto Rico and the Virgin Islands and any other US possessions, are
        prohibited from participating in the presale and ICO and receiving
        Change Tokens. Representatives and individuals acting in the interests
        of legal entities registered in the jurisdiction of Canada, Singapore or
        the United States, as well as Puerto Rico, the Virgin Islands and any
        other US possessions are prohibited from participating in the presale
        and ICO and receiving Change Tokens. Technical IP restrictions will be
        applied.
      </p>
    </Body>
  </Page>
);

export default Legal;
