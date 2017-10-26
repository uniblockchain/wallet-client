// @flow
import React from 'react';
import { Field, reduxForm, type FormProps } from 'redux-form';
import { Link } from 'react-router-dom';
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

const EmailAddress = ({ input }: any): Input => (
  <Input
    {...input}
    type="email"
    placeholder="Type your email here..."
    className="form-control"
  />
);

const Password = ({ input }: any): Input => (
  <Input
    {...input}
    type="password"
    placeholder="Type your password here..."
    className="form-control"
  />
);

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
            <Field name="emailAddress" component={EmailAddress} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Field name="password" component={Password} />
          </FormGroup>
        </Form>
      </Top>
      <Bottom>
        <PrimaryButton type="submit" form="loginForm">
          Log In
        </PrimaryButton>
        <Link to="/">
          <Button>Cancel</Button>
        </Link>
      </Bottom>
    </WrappedContent>
  );
};

export default reduxForm({ form: 'login' })(LoginForm);
