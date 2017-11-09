// @flow
import styled from 'styled-components';

export const Header = styled.h1`
  font-size: 30px;
  color: ${props => (props.alt ? props.theme.alt : props.theme.main)};
`;

export const SubHeader = styled.h2`
  font-size: 30px;
  color: ${props => (props.alt ? props.theme.alt : props.theme.main)};
`;

export const Paragraph = styled.p`
  font-size: 16px;
  color: ${props => (props.alt ? props.theme.altText : props.theme.text)};
`;

export default { Header, SubHeader, Paragraph };
