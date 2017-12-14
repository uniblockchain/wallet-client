// @flow
import React from 'react';
import { Flag } from 'flag';
import { CardInterest } from './interest';
import { CardOrder } from './order';

export const Card = () => (
  <Flag
    name="feature.cardOrderFlow"
    component={CardOrder}
    fallbackComponent={CardInterest}
  />
);

export default Card;
