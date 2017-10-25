// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Content, Top, Bottom, Button, PrimaryButton } from './ui';

const StyledContent = Content.extend`
  background-image: linear-gradient(151deg, #19c3ed, #8bf2d3);
`;

const Header = styled.h1`
  font-size: 42px;
  font-weight: bold;
  line-height: 1.05;
  letter-spacing: -0.9px;
  color: white;
`;

const Subheader = styled.h2`
  font-size: 24px;
  font-weight: 300;
  line-height: 1.25;
  letter-spacing: -0.5px;
  color: #00346b;
`;

const App = () => (
  <StyledContent>
    <Top>
      <Header>Change is a free digital wallet.</Header>
      <Subheader>Send money and buy things. Safely.</Subheader>
    </Top>
    <Bottom>
      <Link to="/signup">
        <PrimaryButton>Sign up</PrimaryButton>
      </Link>
      <Link to="/login">
        <Button>Log in</Button>
      </Link>
    </Bottom>
  </StyledContent>
);

export default App;
