// @flow

import React from 'react';
import { connect } from 'react-redux';
import type { MapStateToProps } from 'react-redux';
import MarketRate from './marketRate';
import { CurrencyName } from '../../currency';
import { Wallet } from '../../wallet/walletState';
import type { WalletType } from '../../wallet/walletState';
import withWallet from '../../wallet/withWallet';
import { Table, TableHead, TableBody } from '../balance/table/BalanceTable';

export type Props = {
  wallets: Array<Wallet>,
};

export const MarketRateTable = ({ wallets }: Props) => (
  <div>
    <Table className="table">
      <TableHead>
        <tr>
          <th scope="col">Currency</th>
          <th scope="col">Price</th>
        </tr>
      </TableHead>
      <TableBody>
        {wallets.map(wallet => (
          <tr key={wallet.currency}>
            <td>{CurrencyName.get(wallet.currency)}</td>
            <td>
              <MarketRate fromCurrency={wallet.currency} />
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
});

export default withWallet(connect(mapStateToProps)(MarketRateTable));
