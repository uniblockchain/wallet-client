// @flow
import React from 'react';
import styled from 'styled-components';
import { Header, Paragraph } from '../../../ui';
import PlasticCard from '../../../landing/PlasticCard';

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

export const Done = () => (
  <div>
    <StyledHeader>
      All done! <br />
      Sit back and relax.
    </StyledHeader>
    <Explanation>
      We’ll verify the documents and let you know once your card is shipped.
    </Explanation>
    <OrderStatus>Order processing</OrderStatus>
    <PlasticCard
      name="Lisa Robinson"
      number="1234 5678 9012 1101"
      date="12/20"
    />
  </div>
);

export default Done;
