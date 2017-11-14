// @flow
import React from 'react';
import styled from 'styled-components';
import { Field as ReduxField } from 'redux-form';

export const Label = styled.label`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  color: #02bda5;

  &.is-invalid {
    color: #ee583c;
  }
`;

export const Input = styled.input`
  font-size: 16px;
  ::placeholder {
    color: #cccccc;
  }
  &.is-invalid {
    background-image: linear-gradient(
        to top,
        #d50000 2px,
        rgba(213, 0, 0, 0) 2px
      ),
      linear-gradient(to top, rgba(0, 0, 0, 0.26) 1px, transparent 1px);
  }
`;

export const Form = (props: any) => <form {...props} />;

export const FormGroup = (props: any) => (
  <div className="form-group" {...props} />
);

export const FormRow = (props: any) => <div className="form-row" {...props} />;

export const Col = (props: any) => <div className="col" {...props} />;

const FormFeedbackTag = styled.p`
  display: block;
  background-color: #ffc9c0;
  color: #00346b;
  border-radius: 6px;
  padding: 11px 9px 13px 17px;
  font-size: 14px;
  margin-top: 8px;
`;

export const FormFeedback = (props: any) => (
  <FormFeedbackTag
    className={`invalid-feedback ${props.className}`}
    {...props}
  />
);

const renderField = ({
  input,
  label,
  type,
  placeholder,
  meta: { touched, error, warning },
}: any) => (
  <FormGroup>
    <Label className={error ? 'is-invalid' : ''} htmlFor={input.name}>
      {label}
    </Label>
    <Input
      className={`form-control ${error ? 'is-invalid' : ''} ${input.className}`}
      placeholder={placeholder}
      {...input}
      type={type}
    />
    {touched &&
      ((error && <FormFeedback>{error}</FormFeedback>) ||
        (warning && <FormFeedback>{warning}</FormFeedback>))}
  </FormGroup>
);

export const Field = (props: any) => (
  <ReduxField component={props.component || renderField} {...props} />
);

export default {
  Label,
  Input,
  Form,
  FormGroup,
  FormRow,
  FormFeedback,
  Field,
  Col,
};
