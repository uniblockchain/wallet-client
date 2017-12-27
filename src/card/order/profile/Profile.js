// @flow
import React from 'react';
import moment from 'moment-es6';
import styled from 'styled-components';
import { connect, type MapStateToProps } from 'react-redux';
import type { FormProps } from 'redux-form';
import { reduxForm } from 'redux-form';
import { push } from 'react-router-redux';
import {
  Header,
  Form,
  FormGroup,
  FormRow,
  Col,
  Col3,
  Field,
  SelectField,
  FormFeedback,
  PrimaryButton,
  Label,
} from '../../../ui';
import { CARD_ORDER_ADDRES_ROUTE } from '../constants';
import { profileFormSubmitHandler, withProfile } from '../../../user/profile';
import countryCodes from './countryCodes';

const StyledHeader = styled(Header)`
  color: #2a2a2a;
`;

type Props = {} & FormProps;

export const Profile = ({ handleSubmit, error }: Props) => (
  <div>
    <StyledHeader>Who will the card be registered to?</StyledHeader>
    <Form
      id="profileForm"
      onSubmit={handleSubmit(profileFormSubmitHandler)}
      className="mt-5"
    >
      {error && <FormFeedback>{error}</FormFeedback>}

      <Field name="firstName" label="First name" type="text" />

      <Field name="lastName" label="Last name" type="text" />

      <Label>Mobile number</Label>
      <FormRow>
        <Col3>
          <SelectField
            name="phoneCountryCode"
            items={countryCodes.map(code => ({
              value: code.dialCode,
              label: code.dialCode,
            }))}
          />
        </Col3>
        <Col>
          <Field name="phoneNumber" placeholder="Phone number" type="text" />
        </Col>
      </FormRow>

      <Label>Date of birth</Label>
      <FormRow>
        <Col>
          <Field name="day" placeholder="Day" type="number" />
        </Col>
        <Col>
          <Field
            name="month"
            alabel="Month"
            placeholder="Month"
            type="number"
          />
        </Col>
        <Col>
          <Field name="year" placeholder="Year" type="number" />
        </Col>
      </FormRow>

      <FormGroup className="mt-5">
        <PrimaryButton type="submit">Next</PrimaryButton>
      </FormGroup>
    </Form>
  </div>
);

Profile.displayName = 'Profile';

const ProfileForm = reduxForm({
  form: 'cardProfile',
  onSubmitSuccess: (result, dispatch) => {
    dispatch(push(CARD_ORDER_ADDRES_ROUTE));
  },
})(withProfile(Profile));

const getInitialFormData = (profile: Profile) => {
  // FIXME: logic in view
  if (
    profile.id ||
    profile.firstName ||
    profile.lastName ||
    profile.mobileNumber ||
    profile.dateOfBirth
  ) {
    let dateFields = {};

    if (profile.dateOfBirth instanceof moment) {
      dateFields = {
        day: profile.dateOfBirth.date(),
        month: profile.dateOfBirth.month() + 1,
        year: profile.dateOfBirth.year(),
      };
    }

    let phoneNumber = profile.mobileNumber;
    let phoneCountryCode = '';

    countryCodes.forEach(countryCode => {
      if (profile.mobileNumber.startsWith(countryCode.dialCode)) {
        [, phoneNumber] = profile.mobileNumber.split(countryCode.dialCode);
        phoneCountryCode = countryCode.dialCode;
      }
    });

    return {
      id: profile.id,
      firstName: profile.firstName,
      lastName: profile.lastName,
      phoneNumber,
      phoneCountryCode,
      ...dateFields,
    };
  }
  return null;
};

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  profile: state.user.profile,
  initialValues: getInitialFormData(state.user.profile),
});

const ConnectedProfile = connect(mapStateToProps, null)(ProfileForm);

ConnectedProfile.displayName = 'Profile';

export default ConnectedProfile;
