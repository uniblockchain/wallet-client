// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  children: any,
};

const Slide = styled.div`
  padding: 1em;
  width: 100vw;
  height: 30vh;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ({ children }: Props) => <Slide>{children}</Slide>;
