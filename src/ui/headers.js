// @flow
import styled from 'styled-components';

export const Header = styled.h1`
  font-family: 'CircularStdBold', Fallback, sans-serif;
  font-size: 36px;
  color: ${props => props.theme.altText};
`;

export const SubHeader = styled.h2`
  font-family: 'CircularStdBold', Fallback, sans-serif;
  font-size: 30px;
  color: ${props => props.theme.altText};
`;

export default { Header, SubHeader };
