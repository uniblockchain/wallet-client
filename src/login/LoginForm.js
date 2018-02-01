// @flow
import React from 'react';
import styled from 'styled-components';
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
import { routes } from '../router';

const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

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
        <Form id="loginForm" onSubmit={handleSubmit(loginFormSubmitHandler)}>
          {error && <FormFeedback className="mt-4">{error}</FormFeedback>}
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
          <Field
            name="otp"
            label="Two Factor Authentication"
            type="password"
            placeholder="If enabled..."
          />
        </Form>
      </Top>
      <Bottom>
        <PrimaryButton type="submit" form="loginForm">
          Log In
        </PrimaryButton>
        <Links>
          <Link to={routes.BASE}>
            <LinkButton>Cancel</LinkButton>
          </Link>
          <Link to={routes.RESET_PASSWORD}>
            <LinkButton>Forgot password</LinkButton>
          </Link>
        </Links>
      </Bottom>
    </WrappedContent>
  );
};

export default reduxForm({ form: 'login' })(LoginForm);
