// @flow
import React from 'react';
import { reduxForm, type FormProps } from 'redux-form';
import { loginFormSubmitHandler } from './loginRoutines';
import {
  WrappedContent,
  Top,
  Bottom,
  Header,
  LinkButton,
  Link,
  PrimaryButton,
  Form,
  Field,
  FormFeedback,
} from '../ui';

export const LoginForm = (props: FormProps) => {
  const { handleSubmit, error } = props;
  return (
    <WrappedContent>
      <Top>
        <Header alt>
          Welcome back.
          <br />
          Please log in.
        </Header>
        <Form
          id="loginForm"
          onSubmit={handleSubmit(loginFormSubmitHandler)}
          className="mt-5"
        >
          {error && <FormFeedback>{error}</FormFeedback>}
          <Field
            name="username"
            label="Email address"
            type="email"
            placeholder="Type your email here..."
          />
          <Field
            name="password"
            label="Password"
            type="password"
            placeholder="Type your password here..."
          />
        </Form>
      </Top>
      <Bottom>
        <PrimaryButton type="submit" form="loginForm">
          Log In
        </PrimaryButton>
        <Link to="/">
          <LinkButton>Cancel</LinkButton>
        </Link>
      </Bottom>
    </WrappedContent>
  );
};

export default reduxForm({ form: 'login' })(LoginForm);
