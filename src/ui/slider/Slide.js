// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  alt: boolean,
  children: any,
};

const SlideDiv = ({ alt, ...props }: Props) => (
  <div {...props}>{props.children}</div>
);

const Slide = styled(SlideDiv)`
  padding: 1em;
  width: 100vw;
  height: 240px;
  background-color: ${props =>
    props.alt ? props.theme.altBackground : props.theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export default Slide;
