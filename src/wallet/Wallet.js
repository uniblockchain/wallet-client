// @flow
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Content, Card, PrimaryButton } from '../ui';
import menu from '../menu';
import BottomNavigation from '../ui/bottomNavigation';
import TopBar from '../ui/topBar';
import CurrencyTabs from './currencyTabs';
import withWallet from './withWallet';

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const InlineButton = PrimaryButton.extend`
  display: inline;
  width: 50%;
  padding: 0 33px 0 33px;
  margin: 0 10px 0 10px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Balance = styled.p`
  font-size: 40px;
  font-weight: bold;
  line-height: 0.83;
  letter-spacing: -1.3px;
  text-align: center;
  color: #00346b;
`;

const FiatBalance = styled.p`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #a1a1a1;
`;

export const Wallet = () => (
  <Content>
    <TopBar />
    <CurrencyTabs />
    <Card>
      <MainContent>
        <Balance>0.45125116</Balance>
        <FiatBalance>~ €1901.52</FiatBalance>
        <Buttons>
          <InlineButton>
            <Link to="/receive">Receive</Link>
          </InlineButton>
          <InlineButton>
            <Link to="/send">Send</Link>
          </InlineButton>
        </Buttons>
      </MainContent>
    </Card>
    <BottomNavigation menu={menu} />
  </Content>
);

export default withWallet(Wallet);
