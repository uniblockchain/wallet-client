// @flow

import React from 'react';
import type { MapStateToProps } from 'react-redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import AppRouter from './router';
import { Bottom, Button, Link, PrimaryButton, Top, WrappedContent } from './ui';

const StyledContent = WrappedContent.extend`
  background-image: linear-gradient(151deg, #19c3ed, #8bf2d3);
`;

const Header = styled.h1`
  font-size: 42px;
  line-height: 1.05;
  letter-spacing: -0.9px;
  color: white;
  margin-top: 10px;
`;

const SubHeader = styled.h2`
  font-size: 24px;
  font-weight: 300;
  line-height: 1.25;
  letter-spacing: -0.5px;
  color: #00346b;
  margin-top: 20px;
`;

const SignupButton = styled(PrimaryButton)`
  background-color: #00346b;
`;

type Props = {
  +authenticated: boolean,
};

export const App = ({ authenticated }: Props) => {
  if (authenticated) {
    return <AppRouter cardOrderFlow />;
  }
  return (
    <StyledContent>
      <Top>
        <Header>Change is a free digital wallet.</Header>
        <SubHeader>Get started with cryptocurrencies. Easily.</SubHeader>
      </Top>
      <Bottom>
        <Link to="/signup">
          <SignupButton>Sign up</SignupButton>
        </Link>
        <Link to="/login">
          <Button>Log in</Button>
        </Link>
      </Bottom>
    </StyledContent>
  );
};

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  authenticated: !!state.login.token,
});

export default connect(mapStateToProps)(App);
