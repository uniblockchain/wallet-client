// @flow
import React from 'react';
import { Field, reduxForm, type FormProps } from 'redux-form';
import {
  WrappedContent,
  Top,
  Bottom,
  Header,
  Label,
  Input,
  Button,
  PrimaryButton,
  Form,
  FormGroup,
} from '../ui';

export const LoginForm = (props: FormProps) => {
  const { handleSubmit } = props;
  return (
    <WrappedContent>
      <Top>
        <Header>Welcome back.</Header>
        <Header>Please log in.</Header>
        <Form id="loginForm" onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="emailAddress">Email address</Label>
            <Field
              name="emailAddress"
              className="form-control"
              component={Input}
              type="email"
              placeholder="Type your email here..."
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Field
              name="password"
              className="form-control"
              component={Input}
              type="password"
              placeholder="Type your password here..."
            />
          </FormGroup>
        </Form>
      </Top>
      <Bottom>
        <PrimaryButton type="submit" form="loginForm">
          Log In
        </PrimaryButton>
        <Button>Cancel</Button>
      </Bottom>
    </WrappedContent>
  );
};

export default reduxForm({ form: 'login' })(LoginForm);
