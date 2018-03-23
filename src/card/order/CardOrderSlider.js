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

const youAreInTheWaitingListSection = (
  <GradientSlider>
    <WhiteBackgroundSlide>
      <GradientHeading>
        You are in the <br />
        waiting list
      </GradientHeading>
      <PrimaryParagraph>
        With Change Card you can make your payments and ATM withdrawals with
        Bitcoin, Ether, or any other supported currency.
      </PrimaryParagraph>
    </WhiteBackgroundSlide>
    <WhiteBackgroundSlide>
      <GradientHeading>
        You are in the <br />
        waiting list
      </GradientHeading>
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
      <GradientHeading>
        Pay with any <br />
        currency
      </GradientHeading>
      <PrimaryParagraph>
        With Change Card you can make your payments and ATM withdrawals with
        Bitcoin, Ether, or any other supported currency.
      </PrimaryParagraph>
    </WhiteBackgroundSlide>
    <WhiteBackgroundSlide>
      <GradientHeading>
        Accepted <br />
        everywhere
      </GradientHeading>
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
