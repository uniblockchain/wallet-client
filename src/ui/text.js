// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  alt: boolean,
  children: any,
};

const H1 = ({ alt, ...props }: Props) => <h1 {...props}>{props.children}</h1>;

export const Header = styled(H1)`
  font-size: 30px;
  color: ${props => (props.alt ? props.theme.alt : props.theme.main)};
`;

const H2 = ({ alt, ...props }: Props) => <h2 {...props}>{props.children}</h2>;

export const SubHeader = styled(H2)`
  font-size: 30px;
  color: ${props => (props.alt ? props.theme.alt : props.theme.main)};
`;

const P = ({ alt, ...props }: Props) => <p {...props}>{props.children}</p>;

export const Paragraph = styled(P)`
  font-size: 16px;
  color: ${props => (props.alt ? props.theme.altText : props.theme.text)};
`;

export default { Header, SubHeader, Paragraph };
