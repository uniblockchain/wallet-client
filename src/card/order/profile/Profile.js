// @flow
import React from 'react';
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
  Field,
  FormFeedback,
  PrimaryButton,
  Label,
} from '../../../ui';
import { CARD_ORDER_ADDRES_ROUTE } from '../constants';
import { profileFormSubmitHandler, withProfile } from '../../../user/profile';

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

      <Field
        name="mobileNumber"
        label="Mobile number"
        placeholder="Phone number"
        type="string"
      />

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

    if (profile.dateOfBirth instanceof Date) {
      dateFields = {
        day: profile.dateOfBirth.getDate(),
        month: profile.dateOfBirth.getMonth() + 1,
        year: profile.dateOfBirth.getFullYear(),
      };
    }

    return {
      id: profile.id,
      firstName: profile.firstName,
      lastName: profile.lastName,
      mobileNumber: profile.mobileNumber,
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
