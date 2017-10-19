// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Label, Input } from 'reactstrap';
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
    <div className="top">
      <h1>Good day.</h1>
      <h1>Let&apos;s set up your account.</h1>
      <Form>
        <FormGroup>
          <Label for="emailAddress">Email address</Label>
          <Input
            type="email"
            id="emailAddress"
            value={props.email}
            autoFocus
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
