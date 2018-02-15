// @flow
import React from 'react';
import styled from 'styled-components';
import { withStyles } from 'material-ui';
import {
  Field,
  type FormProps,
  formValueSelector,
  reduxForm,
} from 'redux-form';
import type { MapStateToProps } from 'react-redux';
import { connect } from 'react-redux';
import { exchangeFormSubmitHandler } from './exchangeRoutines';
import { PrimaryButton, WrappedContent } from '../../ui';
import { InOutIcon } from '../../ui/icon';
import { getActiveWallet } from '../../redux/selectors';
import type { WalletType } from '../walletState';
import withWallet from '../withWallet/withWallet';
import CurrencySelect from './CurrencySelect';

const Top = styled.div`
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 0px 50px 0px;
  margin: 0;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
`;

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: auto;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;

const SmallText = styled.p`
  font-size: 12px;
  color: #a1a1a1;
  margin-bottom: 0px;
  width: max-content;
`;

const SmallTextRight = SmallText.extend`
  align-self: flex-end;
`;

const StyledInput = styled.input`
  font-family: Usual;
  width: 100%;
  font-size: 24px;
  align-self: flex-end;
  border: none;
  text-align: right;
  padding: 0px;
`;

const inOutStyle = {
  root: {
    color: '#02bda5',
    width: '36px',
    height: '36px',
  },
};

const ConvertButton = PrimaryButton.extend`
  background-image: linear-gradient(to right, #56f4c8, #3edbb5);
`;

const InOutWithStyles = withStyles(inOutStyle)(InOutIcon);

type Props = {
  wallets: Array<WalletType>,
  selectedFromWallet: number,
} & FormProps;

const styledInputField = ({ input, label, type }: any): any => {
  return <StyledInput {...input} placeholder={label} type={type} />;
};

export const Exchange = ({
  handleSubmit,
  wallets,
  selectedFromWallet,
}: Props) => {
  const toWallets = wallets.filter(w => w.id !== Number(selectedFromWallet));
  return (
    <WrappedContent>
      <Top>1 BTC = 62.54 LTC</Top>
      <Form onSubmit={handleSubmit(exchangeFormSubmitHandler)}>
        <Row>
          <Field
            name="fromWallet"
            component={CurrencySelect}
            wallets={wallets}
            text="Exchange"
          />
          <RightBox>
            <Field
              name="fromValue"
              type="number"
              component={styledInputField}
            />
            <SmallTextRight>8184.64 EUR</SmallTextRight>
          </RightBox>
        </Row>
        <Row>
          <InOutWithStyles />
        </Row>
        <Row>
          <Field
            name="toWallet"
            component={CurrencySelect}
            wallets={toWallets}
            text="Receive"
          />
          <RightBox>
            <Field name="toValue" type="number" component={styledInputField} />
            <SmallTextRight>8175.62 EUR</SmallTextRight>
          </RightBox>
        </Row>
        <Buttons>
          <ConvertButton type="submit" inline>
            Convert
          </ConvertButton>
        </Buttons>
      </Form>
    </WrappedContent>
  );
};

const ExchangeForm = reduxForm({ form: 'exchange' })(Exchange);
const selector = formValueSelector('exchange');

const getInitialValues = state => {
  const fromWallet = getActiveWallet(state);
  if (!fromWallet) {
    return null;
  }
  return {
    fromWallet: fromWallet.id,
    fromValue: 0.0,
    toValue: 0.0,
  };
};

const mapStateToProps: MapStateToProps<*, Props, *> = state => ({
  wallets: state.wallet ? state.wallet.wallets : [],
  selectedFromWallet: selector(state, 'fromWallet'),
  selectedToWallet: selector(state, 'toWallet'),
  initialValues: getInitialValues(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(
  withWallet(ExchangeForm),
);
