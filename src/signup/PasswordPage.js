// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Header, Label, Input, Form, FormGroup } from '../ui';
import signupActions from './signupActions';
import type { SignupPasswordUpdate } from './signupActionTypes';

type Props = {
  password: string,
  updatePassword: (string, ValidityState) => SignupPasswordUpdate,
};

export const PasswordPage = (props: Props) => {
  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    props.updatePassword(e.currentTarget.value, e.currentTarget.validity);
  };
  return (
    <div className="top">
      <Header>One more thing.</Header>
      <Header>Create your password.</Header>
      <Form>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            id="password"
            type="password"
            autoFocus
            className="form-control"
            value={props.password}
            placeholder="Type your password here..."
            onChange={handleChange}
          />
        </FormGroup>
      </Form>
    </div>
  );
};

const mapStateToProps = state => ({
  password: state.signup.password,
});

const mapDispatchToProps = {
  updatePassword: signupActions.signupPasswordUpdate,
};

export default connect(mapStateToProps, mapDispatchToProps)(PasswordPage);
