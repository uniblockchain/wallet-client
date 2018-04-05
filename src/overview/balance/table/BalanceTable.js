// @flow

import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import type { MapStateToProps } from 'react-redux';
import {
  CurrencyName,
  formatFiatCurrency,
  formatCryptoCurrency,
} from '../../../currency';
import { Wallet, type WalletType } from '../../../wallet/walletState';
import withWallet from '../../../wallet/withWallet';
import variables from '../../../ui/variables';

export type Props = {
  wallets: Array<Wallet>,
  currency: string,
};

const Table = styled.table`
  th:nth-child(2),
  td:nth-child(2),
  th:nth-child(3),
  td:nth-child(3) {
    text-align: right;
  }
`;

export const TableHead = styled.thead`
  th {
    color: ${variables.colorNeutralLight} !important;
    border: 0 !important;
    padding-bottom: 0;
    line-height: 2.14;
    font-size: ${variables.fontSizeSmall};
  }
`;

export const TableBody = styled.tbody`
  tr {
    font-size: ${variables.fontSizeMedium};
  }
  tr:nth-child(1) td {
    border: 0;
    padding-top: 0;
  }
`;

export const BalanceTable = ({ wallets, currency }: Props) => (
  <div>
    <Table className="table">
      <TableHead>
        <tr>
          <th scope="col">Currency</th>
          <th scope="col">Balance</th>
          <th scope="col">Value</th>
        </tr>
      </TableHead>
      <TableBody>
        {wallets.map(wallet => (
          <tr key={wallet.currency}>
            <td>{CurrencyName.get(wallet.currency)}</td>
            <td>{formatCryptoCurrency(wallet.getBalance())}</td>
            <td>
              {formatFiatCurrency(
                wallet.getRepresentationalBalance(currency),
                currency,
              )}
            </td>
          </tr>
        ))}
      </TableBody>
    </Table>
  </div>
);

const mapStateToProps: MapStateToProps<*, Props, *> = state => ({
  wallets: state.wallet
    ? state.wallet.wallets.map((wallet: WalletType) => new Wallet(wallet))
    : [],
  currency: state.wallet ? state.wallet.currency : undefined,
});

export default withWallet(connect(mapStateToProps)(BalanceTable));
