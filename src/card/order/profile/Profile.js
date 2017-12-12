// @flow
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
  // Bottom,
} from '../../../ui';
import { CARD_ORDER_ADDRES_ROUTE } from '../constants';
import { profileFormSubmitHandler } from '../../../user/profile';
import type { FormProps } from 'redux-form';
import { reduxForm } from 'redux-form';
import { push } from 'react-router-redux';

const Container = styled.div`
  padding-top: 61px;
  margin-left: 34px;
  margin-right: 49px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled(Header)`
  color: #2a2a2a;
`;

const StyledForm = styled(Form)`
  padding-bottom: 100px;
`;

type Props = {} & FormProps;

export const Profile = ({ handleSubmit, error }: Props) => (
  <Container>
    <StyledHeader>Who will the card be registered to?</StyledHeader>
    <StyledForm
      id="profileForm"
      onSubmit={handleSubmit(profileFormSubmitHandler)}
      className="mt-5"
    >
      {error && <FormFeedback>{error}</FormFeedback>}

      <Field name="firstName" label="First name" type="text" />

      <Field name="lastName" label="Last name" type="text" />

      <Label>Phone number</Label>
      <FormRow>
        <Col>
          <Field
            name="internationalCallingCode"
            placeholder="Calling code"
            type="string"
          />
        </Col>
        <Col>
          <Field name="phoneNumber" placeholder="Number" type="number" />
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
    </StyledForm>
  </Container>
);

export default reduxForm({
  form: 'cardProfile',
  onSubmitSuccess: (result, dispatch) => {
    dispatch(push(CARD_ORDER_ADDRES_ROUTE));
  },
})(Profile);
