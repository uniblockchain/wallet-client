// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Header, Label, Input, Form, FormGroup } from '../ui';
import signupActions from './signupActions';
import type { SignupEmailUpdate } from './signupActionTypes';

type Props = {
  email: string,
  updateEmail: (string, ValidityState) => SignupEmailUpdate,
};

export const EmailPage = (props: Props) => {
  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    props.updateEmail(e.currentTarget.value, e.currentTarget.validity);
  };
  return (
    <div>
      <Header>Good day.</Header>
      <Header>Let&apos;s set up your account.</Header>
      <Form>
        <FormGroup>
          <Label for="emailAddress">Email address</Label>
          <Input
            type="email"
            id="emailAddress"
            className="form-control"
            value={props.email}
            placeholder="Type your email here..."
            onChange={handleChange}
          />
        </FormGroup>
      </Form>
    </div>
  );
};

const mapStateToProps = state => ({
  email: state.signup.email,
});

const mapDispatchToProps = {
  updateEmail: signupActions.signupEmailUpdate,
};

export default connect(mapStateToProps, mapDispatchToProps)(EmailPage);
