// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Link } from 'react-router-dom';

import variables from './variables';

const Container = styled.div`
  padding: 48px 24px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    padding: 60px 0;
  `};
`;

const InnerContainer = styled.div`
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    width: 960px;
    margin: 0 auto;
  `};
  ${({ theme }) => breakpoint('desktop', theme.breakpoints)`
    width: 1152px;
  `};
`;

const ItemsContainer = styled.div`
  text-align: center;
  &:not(:last-child) {
    margin-bottom: 24px;
  }
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    display: flex;
    justify-content: center;
  `};
`;

const Item = styled.div`
  a {
    color: ${props =>
      props.light ? variables.colorNeutralLight : variables.colorNeutral};
  }
`;

const ItemLink = styled(Link)`
  font-size: ${variables.fontSizeSmall};
  display: block;
  padding: 9px 12px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    display: inline-block;
    padding: 12px 24px;
    &:hover {
      color: ${variables.colorNeutralDark};
      text-decoration: none;
    }
  `};
`;

const Company = styled.div`
  color: ${variables.colorNeutralLight};
  font-size: ${variables.fontSizeSmall};
  text-align: center;
  padding: 9px 12px;
  ${({ theme }) => breakpoint('tablet', theme.breakpoints)`
    padding: 12px 24px;
  `};
`;

export const Footer = () => (
  <Container>
    <InnerContainer>
      <ItemsContainer>
        <Item>
          <ItemLink to="/landing">Home</ItemLink>
        </Item>
        <Item>
          <ItemLink to="/landing#wallet">Wallet</ItemLink>
        </Item>
        <Item>
          <ItemLink to="/landing#card">Card</ItemLink>
        </Item>
        <Item>
          <ItemLink to="/about">About</ItemLink>
        </Item>
        <Item>
          <ItemLink to="/careers">Careers</ItemLink>
        </Item>
        <Item>
          <ItemLink to="/media">Media kit</ItemLink>
        </Item>
        <Item>
          <ItemLink to="https://support.getchange.com/" target="_blank">
            Support
          </ItemLink>
        </Item>
        <Item>
          <ItemLink to="https://medium.com/@changebank" target="_blank">
            Blog
          </ItemLink>
        </Item>
      </ItemsContainer>

      <ItemsContainer>
        <Item light>
          <ItemLink to="/legal/privacy-policy">Privacy policy</ItemLink>
        </Item>
        <Item light>
          <ItemLink to="/legal/terms">Terms & conditions</ItemLink>
        </Item>
        <Item light>
          <ItemLink to="/legal/aml">AML</ItemLink>
        </Item>
      </ItemsContainer>

      <Company>All Rights Reserved © Lion Capital OÜ</Company>
    </InnerContainer>
  </Container>
);

export default Footer;
