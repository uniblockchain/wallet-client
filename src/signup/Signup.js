// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Link } from 'react-router-dom';
import { WrappedContent, Top, Bottom, PrimaryButton, Button } from '../ui';
import userActions from '../user/userActions';
import { type UserCreationRequest } from '../user/userActionTypes';
import EmailPage from './EmailPage';
import PasswordPage from './PasswordPage';
import type { UserState } from '../user/userState';

type Props = {
  email: string,
  emailValidity: ValidityState,
  password: string,
  passwordValidity: ValidityState,
  user: UserState,
  +openWallet: () => void,
  +createUser: (string, string) => UserCreationRequest,
};

type State = {
  emailProvided: boolean,
};

export class Signup extends Component<Props, State> {
  state = {
    emailProvided: false,
  };

  componentWillReceiveProps = (nextProps: Props) => {
    if (nextProps.user && nextProps.user.id) {
      nextProps.openWallet();
    }
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
  user: state.user,
});

const mapDispatchToProps = {
  createUser: userActions.userCreationRequested,
  openWallet: () => push('/wallet'),
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
