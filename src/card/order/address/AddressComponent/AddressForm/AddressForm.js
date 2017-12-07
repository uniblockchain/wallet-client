// @flow
import React from 'react';
import styled from 'styled-components';
import { reduxForm, type FormProps } from 'redux-form';
import {
  Form,
  FormGroup,
  Field,
  PrimaryButton,
  FormFeedback,
  WrappedContent,
} from '../../../../../ui';
import { addressFormSubmitHandler } from '../../addressRoutine';

const StyledContent = styled(WrappedContent)`
  background-color: #e5f9f3;
`;

type Props = {} & FormProps;

export const AddressForm = ({ handleSubmit, error }: Props) => (
  <div>
    <StyledContent>
      <Form
        id="addressForm"
        onSubmit={handleSubmit(addressFormSubmitHandler)}
        className="mt-5"
      >
        {error && <FormFeedback>{error}</FormFeedback>}

        <Field name="country" label="Country" type="text" />

        <Field
          name="streetAddress"
          label="Street address and apartment"
          type="text"
        />

        <Field name="city" label="City" type="text" />

        <Field name="postalCode" label="Postal Code" type="text" />

        <FormGroup className="mt-5">
          <PrimaryButton type="submit">Next</PrimaryButton>
        </FormGroup>
      </Form>
    </StyledContent>
  </div>
);

export default reduxForm({ form: 'cardAddress' })(AddressForm);
