// @flow

import React from 'react';
import {
  GradientHeading,
  PrimaryParagraph,
  GradientSlider,
  WhiteBackgroundSlide,
} from '../../ui';

export type Props = {
  cardOrdered: boolean,
};

export const StyledGradientHeading = GradientHeading.extend`
  width: 220px;
  margin: 0 auto;
`;

export const StyledWiderGradientHeading = GradientHeading.extend`
  width: 240px;
  margin: 0 auto;
`;

const youAreInTheWaitingListSection = (
  <GradientSlider>
    <WhiteBackgroundSlide>
      <StyledWiderGradientHeading>
        You are in the <br />
        waiting list
      </StyledWiderGradientHeading>
      <PrimaryParagraph>
        With Change Card you can make your payments and ATM withdrawals with
        Bitcoin, Ether, or any other supported currency.
      </PrimaryParagraph>
    </WhiteBackgroundSlide>
    <WhiteBackgroundSlide>
      <StyledWiderGradientHeading>
        You are in the <br />
        waiting list
      </StyledWiderGradientHeading>
      <PrimaryParagraph>
        Change Card is universally accepted, even in stores that don't accept
        virtual currencies.
      </PrimaryParagraph>
    </WhiteBackgroundSlide>
  </GradientSlider>
);

const joinWaitingListSection = (
  <GradientSlider>
    <WhiteBackgroundSlide>
      <StyledGradientHeading>
        Pay with any <br />
        currency
      </StyledGradientHeading>
      <PrimaryParagraph>
        With Change Card you can make your payments and ATM withdrawals with
        Bitcoin, Ether, or any other supported currency.
      </PrimaryParagraph>
    </WhiteBackgroundSlide>
    <WhiteBackgroundSlide>
      <StyledGradientHeading>
        Accepted <br />
        everywhere
      </StyledGradientHeading>
      <PrimaryParagraph>
        Change Card is universally accepted, even in stores that don't accept
        virtual currencies.
      </PrimaryParagraph>
    </WhiteBackgroundSlide>
  </GradientSlider>
);

export const CardOrderSlider = ({ cardOrdered }: Props) => (
  <div>
    {cardOrdered ? youAreInTheWaitingListSection : joinWaitingListSection}
  </div>
);

export default CardOrderSlider;
