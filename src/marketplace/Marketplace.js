// @flow
import React from 'react';
import styled from 'styled-components';
import { Content, Header, SubHeader } from '../ui';
import menu from '../menu';
import BottomNavigation from '../bottomNavigation';
import TopBar from '../topBar';

const DivWithGradient = styled.div`
  background-image: linear-gradient(to top, #ffffff, #c6f3ff);
  padding: 60px 40px 0 40px;
`;

const StyledHeader = styled(Header)`
  font-size: 42px;
  font-weight: bold;
  line-height: 1.05;
  letter-spacing: -0.9px;
  text-align: center;
  color: #00346b;
  padding-top: 20px;
`;

const StyledSubHeader = styled(SubHeader)`
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  color: #686868;
  padding-top: 20px;
`;

const StyledList = styled.ul`
  padding: 20px 15px 0 15px;
`;

const StyledListItem = styled.li`
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  color: #02bda5;
  list-style: none;
  text-transform: uppercase;
  padding: 18px 0 18px 0;
  border-bottom: 1px solid #f2f2f2;
`;

const Link = styled.button`
  font-size: 14px;
  text-align: center;
  color: #cccccc;
`;

export const Marketplace = () => (
  <Content>
    <TopBar />
    <DivWithGradient>
      <StyledHeader>Marketplace</StyledHeader>
      <StyledSubHeader>
        All the innovation in fintech right at your fingertips. Launching Q1
        2018.
      </StyledSubHeader>
    </DivWithGradient>
    <StyledList>
      <StyledListItem>Invest with RoboAdvisor</StyledListItem>
      <StyledListItem>P2P Loans</StyledListItem>
      <StyledListItem>Crowdfunded Real Estate</StyledListItem>
      <StyledListItem>Insurance</StyledListItem>
    </StyledList>
    <Link>And more</Link>
    <BottomNavigation menu={menu} />
  </Content>
);

export default Marketplace;
