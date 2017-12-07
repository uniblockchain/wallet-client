// @flow

import React from 'react';
import styled from 'styled-components';

export type Props = {
  count: number,
  activeIndex: number,
};

export const Dot = styled.span`
  color: ${props => (props.active ? '#02bda5' : '#f2f2f2')};
  font-size: 1.2em;
`;

const NavigationDots = ({ count, activeIndex }: Props) => {
  return (
    <div>
      {[...Array(count)].map((x, i) => (
        <Dot key={i} active={i === activeIndex}>
          &bull;
        </Dot>
      ))}
    </div>
  );
};

export default NavigationDots;
