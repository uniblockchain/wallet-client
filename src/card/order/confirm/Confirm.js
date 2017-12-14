// @flow
import React from 'react';
import styled from 'styled-components';
import { push } from 'react-router-redux';
import { type FormProps, reduxForm } from 'redux-form';
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
import { getActiveWallet } from '../../../redux/selectors';
import withWallet from '../../../wallet/withWallet';
import CurrencyName from '../../../wallet/CurrencyName';
import { Wallet } from '../../../wallet/walletState';
import ConfirmIcon from './ConfirmIcon';
import { confirmFormSubmitHandler } from './confirmRoutine';
import routes from '../../../router';

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
  wallets: Array<Wallet>,
} & FormProps;

export const Confirm = ({
  error,
  wallets,
  handleSubmit,
  submitting,
}: Props) => {
  return (
    <div>
      <StyledHeader>Please confirm your order.</StyledHeader>
      <Explanation>
        One time fee equivalent to 9€ will be deducted from your chosen wallet.
      </Explanation>
      <form className="mt-5" onSubmit={handleSubmit(confirmFormSubmitHandler)}>
        {error && <FormFeedback>{error}</FormFeedback>}

        <StyledList>
          {wallets.map(wallet => (
            <li key={wallet.id}>
              <Field
                name="wallet"
                id={wallet.currency}
                value={wallet.id}
                parse={value => Number(value)}
                label={CurrencyName.get(wallet.currency)}
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

const ConfirmForm = reduxForm({
  form: 'cardConfirm',
  onSubmitSuccess: (result, dispatch) => {
    dispatch(push(routes.CARD));
  },
})(Confirm);

const initialValues = state => {
  const wallet = getActiveWallet(state);
  if (wallet) {
    return { wallet: wallet.id };
  }
  return undefined;
};

const mapStateToProps: MapStateToProps<*, Props, Props> = state => ({
  wallets: state.wallet.wallets,
  initialValues: initialValues(state),
});

const reduxComponent = connect(mapStateToProps);
const ConfirmWithWallet = withWallet(reduxComponent(ConfirmForm));
ConfirmWithWallet.displayName = 'Confirm';
export default ConfirmWithWallet;
