// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { WrappedContent, Top, Bottom, Button, PrimaryButton } from './ui';

const StyledContent = WrappedContent.extend`
  background-image: linear-gradient(151deg, #19c3ed, #8bf2d3);
`;

const Header = styled.h1`
  font-size: 42px;
  font-weight: bold;
  line-height: 1.05;
  letter-spacing: -0.9px;
  color: white;
`;

const SubHeader = styled.h2`
  font-size: 24px;
  font-weight: 300;
  line-height: 1.25;
  letter-spacing: -0.5px;
  color: #00346b;
`;

const LoginButton = styled(Button)`
  color: #02bda5;
  text-transform: uppercase;
`;

const SignupButton = styled(PrimaryButton)`
  background-color: #00346b;
`;

type Props = {
  +authenticated: boolean,
};

export const App = ({ authenticated }: Props) => {
  if (authenticated) {
    return <Redirect to="/wallet" />;
  }
  return (
    <StyledContent>
      <Top>
        <Header>Change is a free digital wallet.</Header>
        <SubHeader>Send money and buy things. Safely.</SubHeader>
      </Top>
      <Bottom>
        <Link to="/signup">
          <SignupButton>Sign up</SignupButton>
        </Link>
        <Link to="/login">
          <LoginButton>Log in</LoginButton>
        </Link>
      </Bottom>
    </StyledContent>
  );
};

const mapStateToProps = state => ({
  authenticated: !!state.login.token,
});

export default connect(mapStateToProps)(App);
