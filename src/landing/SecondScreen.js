// @flow
import React from 'react';
import styled from 'styled-components';

const WrappedContent = styled.div`
  padding: 3em;
  margin-bottom: 8vh;
`;

const Content = styled.div`
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Heading = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: #02bda5;
`;

const List = styled.ul`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.31;
  text-align: left;
  color: #4a4a4a;
  padding-left: 4vw;
`;

const ListItem = styled.li`
  padding-top: 1vh;
`;

export const SecondScreen = () => (
  <Content>
    <WrappedContent>
      <Heading>With Change you get</Heading>
      <List>
        <ListItem>
          Secure digital wallet to store Bitcoin,  Ethereum and other
          cryptocurrencies
        </ListItem>
        <ListItem>
          Debit card for making everyday  purchases without hidden fees
        </ListItem>
        <ListItem>Marketplace for investing</ListItem>
      </List>
    </WrappedContent>
  </Content>
);

export default SecondScreen;
