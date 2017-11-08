// @flow
import React from 'react';
import { connect, type MapStateToProps } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import type { WalletType } from '..';
import {
  LinkButton,
  Col,
  Form,
  FormGroup,
  FormRow,
  Header,
  Input,
  Label,
  PrimaryButton,
  Top,
  WrappedContent,
} from '../../ui';
import CurrencyName from '../CurrencyName';
import quoteActions from './quote/quoteActions';
import type { Quote } from './quote/quoteApi';

const SendToAddress = ({ input, currencyName }: any): Input => (
  <Input
    {...input}
    type="text"
    placeholder={`Enter ${currencyName || ''} address...`}
    className="form-control"
  />
);

const Amount = ({ input, currencyCode, readOnly }: any): Input => (
  <div className="input-group">
    <Input
      {...input}
      readOnly={readOnly}
      type="text"
      className="form-control"
      placeholder="0.00"
      aria-label="Amount"
    />
    <span className="input-group-addon">{currencyCode}</span>
  </div>
);

type Props = {
  handleSubmit: (eventOrSubmit: any) => void | Promise<*>,
  activeWallet: WalletType,
  fiatCurrencyCode: string,
  getNewQuote: Quote => void,
};

export const SendForm = ({
  handleSubmit,
  activeWallet,
  fiatCurrencyCode,
  getNewQuote,
}: Props) => {
  const currencyName = CurrencyName.get(activeWallet.currency);
  const cryptoCurrencyCode = activeWallet.currency;

  return (
    <WrappedContent>
      <Top>
        <Header>Send {currencyName}</Header>
        <Form id="sendForm" onSubmit={handleSubmit} className="mt-5">
          <FormGroup>
            <Label htmlFor="sendToAddress">Send to</Label>
            <Field
              name="sendToAddress"
              currencyName={currencyName}
              component={SendToAddress}
            />
          </FormGroup>
          <FormGroup>
            <FormRow>
              <Col>
                <Label htmlFor="amountInCrypto">How much</Label>
                <Field
                  name="amountInCrypto"
                  currencyCode={cryptoCurrencyCode}
                  component={Amount}
                  onChange={(event, fromValue) =>
                    getNewQuote({
                      fromValue,
                      fromCurrency: cryptoCurrencyCode,
                      toCurrency: fiatCurrencyCode,
                    })}
                />
              </Col>
              <Col>
                <Label htmlFor="amountInFiat">&nbsp;</Label>
                <Field
                  name="amountInFiat"
                  currencyCode={fiatCurrencyCode}
                  component={Amount}
                  onChange={(event, toValue) =>
                    getNewQuote({
                      fromCurrency: cryptoCurrencyCode,
                      toValue,
                      toCurrency: fiatCurrencyCode,
                    })}
                />
              </Col>
            </FormRow>
          </FormGroup>
          <FormGroup className="mt-5">
            <PrimaryButton type="submit" form="sendForm">
              Send
            </PrimaryButton>
            <Link to="/wallet">
              <LinkButton>Cancel</LinkButton>
            </Link>
          </FormGroup>
        </Form>
      </Top>
    </WrappedContent>
  );
};

const isActiveWallet = activeWalletId => wallet => wallet.id === activeWalletId;

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  activeWallet:
    state.wallet.wallets.find(isActiveWallet(state.wallet.activeId)) || {},
  fiatCurrencyCode: state.wallet.currency,
});

const mapDispatchToProps = {
  getNewQuote: quoteActions.getQuoteRequested,
};

const ConnectedSendForm = connect(mapStateToProps, mapDispatchToProps)(
  SendForm,
);

export default reduxForm({ form: 'send' })(ConnectedSendForm);
