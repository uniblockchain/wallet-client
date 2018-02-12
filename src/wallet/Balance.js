// @flow
import * as React from 'react';
import styled from 'styled-components';
import { Wallet as WalletClass } from './walletState';

export const BalanceDiv = styled.h1`
  font-size: 36px;
  text-align: center;
  color: #2a2a2a;
  margin-bottom: 10px;
`;

export const FiatBalance = styled.p`
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  color: #a1a1a1;
`;

export const BalanceTitle = styled.p`
  text-transform: uppercase;
  font-size: 12px;
  color: #a1a1a1;
  margin-bottom: 6px;
  text-align: center;
`;

export type Props = {
  wallet: ?WalletClass,
  currency: string,
};

const formatBalance = (number: number) => {
  if (!number) {
    return '0.00';
  }
  return number.toFixed(6);
};

export const Balance = ({ wallet, currency }: Props) => {
  if (!wallet) {
    return null;
  }
  return (
    <div>
      <BalanceTitle>Balance</BalanceTitle>
      <BalanceDiv>{formatBalance(wallet.getBalance())}</BalanceDiv>
      <FiatBalance>
        ~{' '}
        {wallet.getRepresentationalBalance(currency).toLocaleString('en-US', {
          style: 'currency',
          currency,
        })}
      </FiatBalance>
    </div>
  );
};
