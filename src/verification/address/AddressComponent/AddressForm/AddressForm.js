// @flow
import React from 'react';
import styled from 'styled-components';
import { reduxForm, type FormProps } from 'redux-form';
import { connect, type MapStateToProps } from 'react-redux';
import { push } from 'react-router-redux';
import countries from 'alpha2-countries';
import {
  Form,
  FormGroup,
  Field,
  PrimaryButton,
  FormFeedback,
} from '../../../../ui';
import { addressFormSubmitHandler } from '../../addressRoutine';
import { VERIFICATION_ID_VERIFICATION_ROUTE } from '../../../constants';
import { type Address, type AddressForm } from '../../addressState';

const StyledForm = styled(Form)`
  padding-bottom: 100px;
`;

type Props = {} & FormProps;

export const AddressReduxForm = ({ handleSubmit, error }: Props) => (
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

const reduxAddressForm = reduxForm({
  form: 'cardAddress',
  onSubmitSuccess: (result, dispatch) => {
    dispatch(push(VERIFICATION_ID_VERIFICATION_ROUTE));
  },
})(AddressReduxForm);

const getInitialFormData = (address: Address): AddressForm => {
  const country = countries.resolveName(address.countryCode);

  return {
    ...address,
    country,
  };
};

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  address: state.user.profile.address,
  initialValues: getInitialFormData(state.user.profile.address),
});

export default connect(mapStateToProps, null)(reduxAddressForm);
