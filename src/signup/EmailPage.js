// @flow
import React from 'react';
import { type FormProps, reduxForm } from 'redux-form';
import { routes } from '../router';
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

export const EmailPage = (props: FormProps) => {
  const { handleSubmit, error } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <WrappedContent>
        <Top>
          <Heading alt>Let&apos;s set up your account.</Heading>
          {error && <FormFeedback>{error}</FormFeedback>}
          <Field
            type="email"
            name="email"
            label="Email address"
            placeholder="Type your email here..."
          />
        </Top>
        <Bottom>
          <PrimaryButton type="submit">Next</PrimaryButton>
          <Link to={routes.BASE}>
            <LinkButton>Cancel</LinkButton>
          </Link>
        </Bottom>
      </WrappedContent>
    </Form>
  );
};

export default reduxForm({
  form: 'signup',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(EmailPage);
