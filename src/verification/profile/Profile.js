// @flow
import moment from 'moment-es6';
import React from 'react';
import { connect, type MapStateToProps } from 'react-redux';
import { push } from 'react-router-redux';
import type { FormProps } from 'redux-form';
import { reduxForm } from 'redux-form';
import styled from 'styled-components';
import {
  Col,
  Field,
  Form,
  FormFeedback,
  FormGroup,
  FormRow,
  Heading,
  Label,
  PrimaryButton,
} from '../../ui';
import { PhoneField } from './phoneField';
import { profileFormSubmitHandler, withProfile } from '../../user/profile';
import { VERIFICATION_ADDRESS_ROUTE } from '../constants';

const StyledHeading = styled(Heading)`
  color: #2a2a2a;
`;

type Props = {} & FormProps;

export const Profile = ({ handleSubmit, error }: Props) => (
  <div>
    <StyledHeading>Who are you?</StyledHeading>
    <Form
      id="profileForm"
      onSubmit={handleSubmit(profileFormSubmitHandler)}
      className="mt-5"
    >
      {error && <FormFeedback>{error}</FormFeedback>}

      <Field name="firstName" label="First name" type="text" />

      <Field name="lastName" label="Last name" type="text" />

      <FormGroup>
        <Label>Mobile number</Label>
        <FormRow>
          <PhoneField />
        </FormRow>
      </FormGroup>

      <FormGroup>
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
      </FormGroup>

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
    dispatch(push(VERIFICATION_ADDRESS_ROUTE));
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

    return {
      id: profile.id,
      firstName: profile.firstName,
      lastName: profile.lastName,
      phoneNumber: profile.mobileNumber,
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
