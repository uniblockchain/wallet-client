// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  WrappedContent,
  Top,
  Bottom,
  PrimaryButton,
  Button,
  Link,
} from '../ui';
import userActions from '../user/userActions';
import { type UserCreationRequest } from '../user/userActionTypes';
import EmailPage from './EmailPage';
import PasswordPage from './PasswordPage';

export type Props = {
  email: string,
  emailValidity: ValidityState,
  password: string,
  passwordValidity: ValidityState,
  authenticated: boolean,
  +createUser: (string, string) => UserCreationRequest,
};

type State = {
  emailProvided: boolean,
};

export class Signup extends Component<Props, State> {
  state = {
    emailProvided: false,
  };

  emailValid = () => this.props.emailValidity && this.props.emailValidity.valid;

  passwordValid = () =>
    this.props.passwordValidity && this.props.passwordValidity.valid;

  handleNext = () => {
    if (this.emailValid()) {
      this.setState({ emailProvided: true });
    }
    if (this.emailValid() && this.passwordValid()) {
      this.props.createUser(this.props.email, this.props.password);
    }
  };

  render() {
    if (this.props.authenticated) {
      return <Redirect to="/overview" />;
    }
    return (
      <WrappedContent>
        <Top>
          {this.emailValid() && this.state.emailProvided ? (
            <PasswordPage />
          ) : (
            <EmailPage />
          )}
        </Top>
        <Bottom>
          <PrimaryButton onClick={this.handleNext}>Next</PrimaryButton>
          <Link to="/">
            <Button>Cancel</Button>
          </Link>
        </Bottom>
      </WrappedContent>
    );
  }
}

const mapStateToProps = state => ({
  email: state.signup.email,
  emailValidity: state.signup.emailValidity,
  password: state.signup.password,
  passwordValidity: state.signup.passwordValidity,
  authenticated: !!state.login.token,
});

const mapDispatchToProps = {
  createUser: userActions.userCreationRequested,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
