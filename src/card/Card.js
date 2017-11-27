// @flow
import React from 'react';
import styled from 'styled-components';
import { Flag } from 'flag';
import { CardInterest } from './interest';
import { CardOrder } from './order';
import { WrappedContent } from '../ui';
import plastic from './img/plastic.png';

const StyledContent = styled(WrappedContent)`
  background-color: #e5f9f3;
`;

const Plastic = styled.img.attrs({
  src: plastic,
  alt: 'Plastic',
})`
  width: 90vw;
  margin-bottom: 3vh;
`;

export const Card = () => (
  <div>
    <StyledContent>
      <Flag
        name="feature.cardOrderFlow"
        component={CardOrder}
        fallbackComponent={CardInterest}
      />
      <Plastic />
    </StyledContent>
  </div>
);

export default Card;
