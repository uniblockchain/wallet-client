// @flow
import React from 'react';
import styled from 'styled-components';
import { Modal, Header } from '../../../../ui';
import type { Transaction as TransactionType } from '../../../../wallet/walletState';
import walletCurrencyValueResolver from '../../../../wallet/walletCurrencyValueResolver';
import FiatValue from '../fiatValue';
import { getTransactionInfo } from './transactionInfo';

export const Amount = Header.extend`
  font-size: 36px;
  margin-bottom: 40px;
  text-transform: uppercase;
`;

export const Label = styled.div`
  font-family: Favorit;
  font-size: 12px;
  font-weight: bold;
  text-align: left;
  color: #02bda5;
`;

export const Field = styled.div`
  font-family: Favorit;
  font-size: 14px;
  line-height: 1.57;
  text-align: left;
  color: #2a2a2a;
  margin-bottom: 10px;
`;

export const AddressField = Field.extend`
  font-size: 12px;
`;

export const StatusField = Field.extend`
  text-transform: lowercase;
  &:first-letter {
    text-transform: uppercase;
  }
`;

export const TransactionInfoLink = styled.a`
  font-size: 14px;
  margin-bottom: 10px;
`;

type Props = {
  transaction: TransactionType,
  onConfirm: () => void,
};

export const TransactionDetails = ({ transaction, onConfirm }: Props) => {
  const feeRepresentationCurrency = walletCurrencyValueResolver.resolve(
    transaction.fee,
  );
  const feeWalletCurrency = walletCurrencyValueResolver.resolve(
    transaction.fee,
    transaction.currency,
  );
  const valueRepresentationCurrency = Math.abs(
    walletCurrencyValueResolver.resolve(transaction.value),
  );
  const value = walletCurrencyValueResolver.resolve(
    transaction.value,
    transaction.currency,
  );
  const valueWalletCurrency = Math.abs(value);

  const isFeeIncluded = transaction.currency !== 'ETH';

  const transactionInfo = getTransactionInfo(transaction);

  const sending = value < 0;
  const netValueWalletCurrency =
    sending && isFeeIncluded
      ? valueWalletCurrency - feeWalletCurrency
      : valueWalletCurrency;
  const netValueRepresentationCurrency =
    sending && isFeeIncluded
      ? valueRepresentationCurrency - feeRepresentationCurrency
      : valueRepresentationCurrency;

  const valueWithFeeWalletCurrency = isFeeIncluded
    ? valueWalletCurrency
    : valueWalletCurrency + feeWalletCurrency;
  const valueWithFeeRepresentationCurrency = isFeeIncluded
    ? valueRepresentationCurrency
    : valueRepresentationCurrency + feeRepresentationCurrency;

  return (
    <div>
      <Modal onConfirm={onConfirm}>
        {sending ? <Label>SENT</Label> : <Label>RECEIVED</Label>}
        <Amount alt>
          {netValueWalletCurrency.toFixed(6)} {transaction.currency}
        </Amount>
        <Label>STATUS</Label>
        <StatusField>{transaction.status}</StatusField>
        <Label>CURRENT VALUE</Label>
        <Field>
          <FiatValue inline value={netValueRepresentationCurrency} />
        </Field>
        {sending && <Label>AMOUNT WITH FEE</Label>}
        {sending && (
          <Field>
            {valueWithFeeWalletCurrency} (<FiatValue
              inline
              value={valueWithFeeRepresentationCurrency}
            />)
          </Field>
        )}
        {sending && <Label>FEE</Label>}
        {sending && (
          <Field>
            {feeWalletCurrency} (<FiatValue
              inline
              value={feeRepresentationCurrency}
            />)
          </Field>
        )}
        <Label>TIME</Label>
        <Field>{transaction.date.toUTCString()}</Field>
        <Label>{sending ? 'RECIPIENT ADDRESS' : 'SENDER ADDRESS'}</Label>
        <AddressField>{transaction.address}</AddressField>
        {transactionInfo && <Label>TRANSACTION ON BLOCKCHAIN</Label>}
        {transactionInfo && (
          <TransactionInfoLink
            href={transactionInfo.baseURL + transaction.transactionId}
          >
            View on {transactionInfo.siteName}
          </TransactionInfoLink>
        )}
      </Modal>
    </div>
  );
};

export default TransactionDetails;
