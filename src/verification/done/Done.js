// @flow
import React from 'react';
import type { MapStateToProps } from 'react-redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PlasticCard from '../../landing/PlasticCard';
import { Header, Paragraph } from '../../ui';
import type { Address } from '../address/addressState';
import withAddress from '../address/withAddress';

const StyledHeader = styled(Header)`
  color: #2a2a2a;
`;

const Explanation = styled(Paragraph)`
  margin-top: 10px;
  width: 80%;
  margin-bottom: 50px;
`;

const OrderStatus = styled.div`
  position: absolute;
  right: 0;
  top: 300px;
  border-radius: 2px;
  background-color: #2a2a2a;
  color: #ffffff;
  text-transform: uppercase;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 7px;
  padding-bottom: 7px;
  font-size: 14px;
  font-weight: bold;
  z-index: 1;
`;

const euCountries = [
  'AT',
  'BE',
  'BG',
  'CY',
  'CZ',
  'DE',
  'DK',
  'EE',
  'ES',
  'FI',
  'FR',
  'GB',
  'GR',
  'HR',
  'HU',
  'IE',
  'IT',
  'LT',
  'LU',
  'LV',
  'MT',
  'NL',
  'PL',
  'PT',
  'RO',
  'SE',
  'SI',
  'SK',
];

const isEuCountry = (countryCode: ?string) =>
  countryCode && euCountries.indexOf(countryCode) > -1;

type Props = {
  address: Address,
};

export const Done = ({ address }: Props) => (
  <div>
    {isEuCountry(address.countryCode) ? (
      <div>
        <StyledHeader>
          All done! <br />
          Sit back and relax.
        </StyledHeader>
        <Explanation>
          We’ll verify the documents and let you know once your card is shipped.
        </Explanation>
        <OrderStatus>Order processing</OrderStatus>
      </div>
    ) : (
      <div>
        <StyledHeader>
          Card orders are currently limited to the EU.
        </StyledHeader>
        <Explanation>
          We have reserved your card and will let you know once it is shipped.
        </Explanation>
        <OrderStatus>Card reserved</OrderStatus>
      </div>
    )}

    <PlasticCard
      name="Lisa Robinson"
      number="1234 5678 9012 1101"
      date="12/20"
    />
  </div>
);

Done.displayName = 'Done';
const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  address: state.user.profile.address,
});

const ConnectedDone = connect(mapStateToProps)(Done);

const done = withAddress(ConnectedDone);
done.displayName = 'Done';

export default done;
