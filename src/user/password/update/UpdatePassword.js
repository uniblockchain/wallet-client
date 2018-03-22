// @flow

import React from 'react';
import { connect } from 'react-redux';
import { FormFeedback, Heading, Top, WrappedContent } from '../../../ui';
import { verificationTokenLoginRoutine } from '../../../login/verification-token/verificationTokenRoutines';
import UpdatePasswordForm from './UpdatePasswordForm';

export type Props = {
  loginWithVerificationToken: string => void,
  match: {
    params: {
      verificationToken: string,
    },
  },
  error: ?string,
  isAuthenticated: boolean,
};

export class PasswordPage extends React.Component<Props> {
  componentWillMount() {
    this.props.loginWithVerificationToken(
      this.props.match.params.verificationToken,
    );
  }

  render() {
    return (
      <WrappedContent>
        <Top>
          <Heading alt>
            Reset your password.
            <br />
            Make it a good one!
          </Heading>
          {this.props.error && (
            <FormFeedback className="mt-3">{this.props.error}</FormFeedback>
          )}
          {!this.props.isAuthenticated &&
            !this.props.error && <div>Loading...</div>}
          {this.props.isAuthenticated && <UpdatePasswordForm />}
        </Top>
      </WrappedContent>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  isAuthenticated: !!state.login.token,
  error: state.login.verificationTokenLoginError,
});

const mapDispatchToProps = {
  loginWithVerificationToken: verificationTokenLoginRoutine,
};

export default connect(mapStateToProps, mapDispatchToProps)(PasswordPage);
