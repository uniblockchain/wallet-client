// @flow
import React from 'react';
import styled from 'styled-components';
import variables from './variables';

type Props = {
  alt: boolean,
  children: any,
};

const H1 = ({ alt, ...props }: Props) => <h1 {...props}>{props.children}</h1>;

export const Heading = styled(H1)`
  font-size: 30px;
  color: ${props => (props.alt ? props.theme.alt : props.theme.main)};
`;

export const GradientHeading = styled(H1)`
  background: linear-gradient(
    to right,
    ${variables.colorGreenLight},
    ${variables.colorBlue}
  );
  position: relative;
  display:inline-block;
  font-family: ${variables.fontPrimaryExtraBold};
  font-size: ${variables.fontSizeLargest};
  fontSizeLargest;
  font-weight: bold;
  line-height: 1;
  padding: 8px;
  letter-spacing: -3px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const H2 = ({ alt, ...props }: Props) => <h2 {...props}>{props.children}</h2>;

export const SubHeading = styled(H2)`
  font-size: 30px;
  color: ${props => (props.alt ? props.theme.alt : props.theme.main)};
`;

const P = ({ alt, ...props }: Props) => <p {...props}>{props.children}</p>;

export const Paragraph = styled(P)`
  font-size: 16px;
  color: ${props => (props.alt ? props.theme.altText : props.theme.text)};
`;

export const PrimaryParagraph = styled(P)`
  color: ${variables.colorNeutralExtraDark};
  font-family: ${variables.fontPrimary};
  font-size: ${variables.fontSizeNormal};
  line-height: 1.5;
`;

export default { Heading: Heading, SubHeading: SubHeading, Paragraph };
