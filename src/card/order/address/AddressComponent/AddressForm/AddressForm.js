// @flow
import React from 'react';
import styled from 'styled-components';
import { reduxForm, type FormProps } from 'redux-form';
import { push } from 'react-router-redux';
import {
  Form,
  FormGroup,
  Field,
  PrimaryButton,
  FormFeedback,
} from '../../../../../ui';
import { addressFormSubmitHandler } from '../../addressRoutine';
import { CARD_ORDER_ID_VERIFICATION_ROUTE } from '../../../constants';

const StyledForm = styled(Form)`
  padding-bottom: 100px;
`;

type Props = {} & FormProps;

export const AddressForm = ({ handleSubmit, error }: Props) => (
  <div>
    <StyledForm
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
    </StyledForm>
  </div>
);

export default reduxForm({
  form: 'cardAddress',
  onSubmitSuccess: (result, dispatch) => {
    dispatch(push(CARD_ORDER_ID_VERIFICATION_ROUTE));
  },
})(AddressForm);
