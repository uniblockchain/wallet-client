// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { Doughnut } from 'react-chartjs-2';
import walletActions from './walletActions';
import walletCurrencyValueResolver from './walletCurrencyValueResolver';
// import type { WalletFetchRequest } from './walletActionTypes';
import './Wallet.css';

import type { Wallet as WalletType } from './walletState';
import BottomNavigation from '../bottomNavigation';

type Props = {
  wallets: Array<WalletType>,
  fetchWallet: () => void,
};

export class Wallet extends Component<Props> {
  componentDidMount() {
    const { fetchWallet } = this.props;
    if (fetchWallet) {
      fetchWallet();
    }
  }

  getDataSet() {
    return {
      datasets: [
        {
          data: this.props.wallets.map((wallet: WalletType) =>
            walletCurrencyValueResolver.resolve(wallet.balance),
          ),
          backgroundColor: ['#19c3ed', '#47d6e2', '#62dfd9'],
          borderWidth: [0, 0, 0],
        },
      ],
      labels: this.props.wallets.map((wallet: WalletType) => wallet.currency),
    };
  }

  options = {
    circumference: 10 / 6 * Math.PI,
    rotation: 1 / 6 * Math.PI,
    legend: {
      display: false,
    },
  };

  render() {
    const data = this.getDataSet();
    return (
      <div>
        <Row className="justify-content-md-center">
          <Col className="wallet col-lg-4">
            <div className="top">
              <div className="text-right">
                <button type="button" className="btn btn-primary bmd-btn-icon">
                  <i className="material-icons">more_horiz</i>
                </button>
              </div>
              <Doughnut data={data} options={this.options} />
            </div>
          </Col>
        </Row>
        <div className="bottom-navigation">
          <BottomNavigation />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  wallets: state.wallet ? state.wallet.wallets : [],
});

const mapDispatchToProps = {
  fetchWallet: walletActions.walletFetchRequested,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
