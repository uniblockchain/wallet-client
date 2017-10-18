// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Label, Input } from 'reactstrap';
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
      <h1>Final step.</h1>
      <h1>Create your password.</h1>
      <Form>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            id="password"
            type="password"
            autoFocus
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
