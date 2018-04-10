// @flow
import React from 'react';
import { connect, type MapStateToProps } from 'react-redux';
import { Link } from 'react-router-dom';
import { reduxForm, type FormProps } from 'redux-form';
import { getActiveWallet } from '../../redux/selectors';
import type { WalletType } from '..';
import { sendFormSubmitHandler } from './sendRoutines';
import {
  LinkButton,
  Col,
  Form,
  FormGroup,
  FormRow,
  Field,
  FieldInput,
  PrimaryButton,
  Top,
  WrappedContent,
  Modal,
} from '../../ui';
import { CurrencyName } from '../../currency';
import {
  quoteRoutine,
  clearRoutine as clearQuoteRoutine,
} from '../quote/quoteRoutine';
import type { QuoteCommand } from '../quote/quoteApi';
import { Balance } from '../Balance';
import AppRouter from '../../router';
import type { QuoteState } from '../quote/quoteReducer';
import { FormFeedback } from '../../ui/form';

type Props = {
  fiatCurrencyCode: string,
  quote: QuoteState,
  getNewQuote: QuoteCommand => void,
  clearQuote: () => void,
  activeWallet: WalletType,
} & FormProps;

export const SendForm = ({
  handleSubmit,
  error,
  submitting,
  fiatCurrencyCode,
  getNewQuote,
  clearQuote,
  clearSubmitErrors,
  activeWallet,
  quote,
}: Props) => {
  if (!activeWallet) {
    return <AppRouter wallet />;
  }
  const currencyName = CurrencyName.get(activeWallet.currency);
  const cryptoCurrencyCode = activeWallet.currency;

  const handleAmountChange = (event, fromValue) => {
    if (!fromValue || fromValue < 0.0001) {
      return;
    }
    clearQuote();
    getNewQuote({
      fromWalletId: activeWallet.id,
      fromValue,
      toCurrency: fiatCurrencyCode,
    });
  };
  const submitAllowed = !submitting && !quote.isLoading;
  return (
    <WrappedContent>
      <Top>
        <Balance wallet={activeWallet} currency={fiatCurrencyCode} />
        <Form id="sendForm" onSubmit={handleSubmit(sendFormSubmitHandler)}>
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
                type="number"
                placeholder="0.00"
                onChange={handleAmountChange}
              />
            </Col>
            <Col>
              <FieldInput
                input={{
                  name: 'amountInFiat',
                  value: quote.to ? quote.to[fiatCurrencyCode] : 0,
                  readOnly: true,
                }}
                meta={{}}
                addon={fiatCurrencyCode}
                label="(Approximately)"
                type="number"
                placeholder="0.00"
              />
            </Col>
          </FormRow>
          {quote.error && <FormFeedback>{quote.error}</FormFeedback>}
          <FormGroup className="mt-4">
            <PrimaryButton
              type="submit"
              form="sendForm"
              disabled={!submitAllowed}
            >
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
  activeWallet: getActiveWallet(state),
  fiatCurrencyCode: state.wallet.currency,
  quote: state.quote,
});

const mapDispatchToProps = {
  getNewQuote: quoteRoutine,
  clearQuote: clearQuoteRoutine,
};

const ConnectedSendForm = connect(mapStateToProps, mapDispatchToProps)(
  SendForm,
);

export default reduxForm({ form: 'send' })(ConnectedSendForm);
