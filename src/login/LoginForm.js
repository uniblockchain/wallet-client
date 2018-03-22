// @flow
import React from 'react';
import styled from 'styled-components';
import { type FormProps, reduxForm } from 'redux-form';
import { loginFormSubmitHandler } from './loginRoutines';
import {
  Bottom,
  Field,
  Form,
  FormFeedback,
  Heading,
  Link,
  LinkButton,
  PrimaryButton,
  Top,
  WrappedContent,
} from '../ui';
import { routes } from '../router';

const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const WrappedForm = WrappedContent.withComponent(Form);

export const LoginForm = (props: FormProps) => {
  const { handleSubmit, error } = props;
  return (
    <WrappedForm onSubmit={handleSubmit(loginFormSubmitHandler)}>
      <Top>
        <Heading alt>
          Welcome back.
          <br />
          Please log in.
        </Heading>
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
      </Top>
      <Bottom>
        <PrimaryButton type="submit">Log In</PrimaryButton>
        <Links>
          <Link to={routes.BASE}>
            <LinkButton>Cancel</LinkButton>
          </Link>
          <Link to={routes.RESET_PASSWORD}>
            <LinkButton>Forgot password</LinkButton>
          </Link>
        </Links>
      </Bottom>
    </WrappedForm>
  );
};

export default reduxForm({ form: 'login' })(LoginForm);
