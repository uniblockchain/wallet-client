// @flow
import React from 'react';
import { connect, type MapStateToProps } from 'react-redux';
import { Link } from 'react-router-dom';
import { reduxForm, type FormProps } from 'redux-form';
import { sendFormSubmitHandler } from './sendRoutines';
import {
  LinkButton,
  Col,
  Form,
  FormGroup,
  FormRow,
  Header,
  Field,
  PrimaryButton,
  Top,
  WrappedContent,
  Modal,
} from '../../ui';
import CurrencyName from '../CurrencyName';
import quoteActions from './quote/quoteActions';
import type { Quote } from './quote/quoteApi';

type Props = {
  fiatCurrencyCode: string,
  getNewQuote: Quote => void,
} & FormProps;

export const SendForm = ({
  handleSubmit,
  error,
  fiatCurrencyCode,
  getNewQuote,
  clearSubmitErrors,
  initialValues,
}: Props) => {
  const { activeWallet } = initialValues;
  const currencyName = CurrencyName.get(activeWallet.currency);
  const cryptoCurrencyCode = activeWallet.currency;
  return (
    <WrappedContent>
      <Top>
        <Header>Send {currencyName}</Header>
        <Form
          id="sendForm"
          onSubmit={handleSubmit(sendFormSubmitHandler)}
          className="mt-5"
        >
          <Field
            name="sendToAddress"
            label="Send to"
            type="text"
            placeholder={`Enter ${currencyName || ''} address...`}
          />
          <FormRow>
            <Col>
              <Field
                name="amountInCrypto"
                addon={cryptoCurrencyCode}
                label="How much"
                type="text"
                placeholder="0.00"
                onChange={(event, fromValue) =>
                  getNewQuote({
                    fromValue,
                    fromCurrency: cryptoCurrencyCode,
                    toCurrency: fiatCurrencyCode,
                  })}
              />
            </Col>
            <Col>
              <Field
                name="amountInFiat"
                addon={fiatCurrencyCode}
                label="(Approximately)"
                type="text"
                placeholder="0.00"
                onChange={(event, toValue) =>
                  getNewQuote({
                    fromCurrency: cryptoCurrencyCode,
                    toValue,
                    toCurrency: fiatCurrencyCode,
                  })}
              />
            </Col>
          </FormRow>
          <FormGroup className="mt-5">
            <PrimaryButton type="submit" form="sendForm">
              Send
            </PrimaryButton>
            <Link to="/wallet">
              <LinkButton>Cancel</LinkButton>
            </Link>
          </FormGroup>
          {error && (
            <Modal
              title="Oops!"
              description={error}
              onConfirm={clearSubmitErrors}
            />
          )}
        </Form>
      </Top>
    </WrappedContent>
  );
};

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  fiatCurrencyCode: state.wallet.currency,
});

const mapDispatchToProps = {
  getNewQuote: quoteActions.getQuoteRequested,
};

const ConnectedSendForm = connect(mapStateToProps, mapDispatchToProps)(
  SendForm,
);

export default reduxForm({ form: 'send' })(ConnectedSendForm);
