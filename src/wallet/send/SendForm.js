// @flow
import React from 'react';
import { connect, type MapStateToProps } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import {
  Button,
  Form,
  FormGroup,
  FormRow,
  Col,
  Header,
  Input,
  Label,
  PrimaryButton,
  Top,
  WrappedContent,
} from '../../ui';
import type { WalletType } from '../';
import CurrencyName from '../CurrencyName';

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
};

export const SendForm = ({
  handleSubmit,
  activeWallet,
  fiatCurrencyCode,
}: Props) => {
  const currencyName = CurrencyName.get(activeWallet.currency);
  const cryptoCurrencyCode = activeWallet.currency;

  return (
    <WrappedContent>
      <Top>
        <Header>Send {currencyName}</Header>
        <Form id="sendForm" onSubmit={handleSubmit}>
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
                />
              </Col>
              <Col>
                <Label htmlFor="amountInFiat">&nbsp;</Label>
                <Field
                  name="amountInFiat"
                  currencyCode={fiatCurrencyCode}
                  readOnly="readOnly"
                  component={Amount}
                />
              </Col>
            </FormRow>
          </FormGroup>
          <FormGroup className="mt-5">
            <PrimaryButton type="submit" form="sendForm">
              Send
            </PrimaryButton>
            <Link to="/wallet">
              <Button>Cancel</Button>
            </Link>
          </FormGroup>
        </Form>
      </Top>
    </WrappedContent>
  );
};

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  activeWallet:
    state.wallet.wallets.find(wallet => wallet.id === state.wallet.activeId) ||
    {},
  fiatCurrencyCode: state.wallet.currency,
});

const ConnectedSendForm = connect(mapStateToProps)(SendForm);

export default reduxForm({ form: 'send' })(ConnectedSendForm);
