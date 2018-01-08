// @flow
import React from 'react';
import styled from 'styled-components';
import { push } from 'react-router-redux';
import { type FormProps, reduxForm, formValueSelector } from 'redux-form';
import type { MapStateToProps } from 'react-redux';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import {
  Field,
  FormFeedback,
  FormGroup,
  Header,
  Paragraph,
  PrimaryButton,
} from '../../../ui';
import { store } from '../../../redux/reduxStore';
import withWallet from '../../../wallet/withWallet';
import { cardOrderFeeRoutine } from '../../../wallet/fee';
import CurrencyName from '../../../wallet/CurrencyName';
import ConfirmIcon from './ConfirmIcon';
import { confirmFormSubmitHandler } from './confirmRoutine';
import { routes } from '../../../router';
import type { MonetaryValues, WalletState } from '../../../wallet/walletState';

const StyledHeader = styled(Header)`
  color: #2a2a2a;
`;

const Explanation = styled(Paragraph)`
  margin-top: 10px;
  width: 80%;
  margin-bottom: 50px;
`;

const StyledList = styled.ul`
  padding-left: 0;
  list-style: none;
  text-align: left;
  color: #a1a1a1;

  & li {
    border-bottom: 1px solid #f2f2f2;
    padding-top: 20px;

    & label {
      text-transform: uppercase;
      font-size: 12px;
      font-weight: bold;
      margin-bottom: 0;
      padding-bottom: 5px;
    }

    & input {
      visibility: hidden;
    }
  }

  & li:last-child {
    border-bottom: none;
  }
`;

const FieldContainer = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const iconStyles = {
  root: {
    width: '24px',
    height: '24px',
    color: '#02bda5',
  },
};

const IconContainer = styled.div`
  min-height: 28px;
  margin-top: -6px;
`;

const StyledConfirmIcon = withStyles(iconStyles)(ConfirmIcon);

const renderField = ({ input, type, label }: any) => (
  <FieldContainer htmlFor={input.id}>
    {label}
    <input {...input} type={type} placeholder={label} />
    <IconContainer>{input.checked && <StyledConfirmIcon />}</IconContainer>
  </FieldContainer>
);

type Props = {
  wallet: WalletState,
  fee: MonetaryValues,
  activeWalletId: number,
} & FormProps;

export const Confirm = ({
  error,
  wallet,
  fee,
  handleSubmit,
  submitting,
  activeWalletId,
  clearSubmitErrors,
}: Props) => {
  const { isLoading, wallets } = wallet;
  const getWallet = (id: number) => wallets.find(it => it.id === id);
  const activeWallet = getWallet(activeWalletId);
  const fetchFee = (e, newValue) => {
    clearSubmitErrors();
    store.dispatch(
      cardOrderFeeRoutine.trigger({
        activeWallet: getWallet(newValue),
      }),
    );
  };
  if (isLoading || fee.isLoading) {
    return null;
  }
  const feeValue = () => {
    if (!fee.fee) {
      return '';
    }
    return fee.fee.find(it => it.currency === 'EUR').value;
  };
  return (
    <div>
      <StyledHeader>Please confirm your order.</StyledHeader>
      <Explanation>
        One time payment equivalent to 9€{' '}
        {fee.fee && `(plus transaction fee of ${feeValue()}€)`}
        will be deducted from your{' '}
        {activeWallet
          ? CurrencyName.get(activeWallet.currency)
          : undefined}{' '}
        wallet.
      </Explanation>
      <form className="mt-5" onSubmit={handleSubmit(confirmFormSubmitHandler)}>
        {(error || fee.error) && (
          <FormFeedback>{error || fee.error}</FormFeedback>
        )}

        <StyledList>
          {wallets.map(w => (
            <li key={w.id}>
              <Field
                name="wallet"
                id={w.currency}
                value={w.id}
                onChange={fetchFee}
                parse={value => Number(value)}
                label={CurrencyName.get(w.currency)}
                type="radio"
                component={renderField}
              />
            </li>
          ))}
        </StyledList>

        <FormGroup className="mt-5">
          <PrimaryButton type="submit" disabled={submitting}>
            Confirm
          </PrimaryButton>
        </FormGroup>
      </form>
    </div>
  );
};

Confirm.displayName = 'Confirm';

const ConfirmForm = reduxForm({
  form: 'cardConfirm',
  onSubmitSuccess: (result, dispatch) => {
    dispatch(push(routes.CARD));
  },
})(Confirm);

const selector = formValueSelector('cardConfirm');

const mapStateToProps: MapStateToProps<*, Props, Props> = state => ({
  wallet: state.wallet,
  fee: state.fee,
  activeWalletId: selector(state, 'wallet'),
});

const reduxComponent = connect(mapStateToProps);
const ConfirmWithWallet = withWallet(reduxComponent(ConfirmForm));
ConfirmWithWallet.displayName = 'Confirm';
export default ConfirmWithWallet;
