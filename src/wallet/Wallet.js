/* eslint-disable no-bitwise */
// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Doughnut, Chart } from 'react-chartjs-2';
import styled from 'styled-components';
import Sidebar from './sidebar';
import menu from '../menu';
import { Content, Top, Card } from '../ui';

import walletActions from './walletActions';
import walletCurrencyValueResolver from './walletCurrencyValueResolver';
import type { Wallet as WalletType } from './walletState';
import BottomNavigation from '../bottomNavigation';
import Transactions from './transactions';

type Props = {
  wallets: Array<WalletType>,
  fetchWallet: () => void,
};

const originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
  draw(args) {
    originalDoughnutDraw.apply(this, ...args);

    const { width, outerRadius, ctx } = this.chart;
    const { datasets } = this.chart.config.data;

    const fontSize = Math.floor(outerRadius / 57); // magic number :o
    ctx.font = `${fontSize}em Roboto`;
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'rgba(0, 0, 0, 0.54)';

    const sum = datasets[0].data.reduce((a, b) => a + b, 0);

    // TODO make currency & formatting dynamic
    const text = sum.toLocaleString('en-US', {
      style: 'currency',
      currency: 'EUR',
    });
    const textX = Math.round((width - ctx.measureText(text).width) / 2);
    const textY = outerRadius;

    ctx.fillText(text, textX, textY * 1.12);
    ctx.fillText('Balance', textX, textY * 0.88);
  },
});

const FixedBottomNavigation = styled(BottomNavigation)`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export class Wallet extends Component<Props> {
  componentDidMount() {
    const { fetchWallet } = this.props;
    if (fetchWallet) {
      fetchWallet();
    }
  }

  getData() {
    const { wallets } = this.props;

    return {
      datasets: [
        {
          data: wallets.map((wallet: WalletType) =>
            walletCurrencyValueResolver.resolve(wallet.balance),
          ),
          backgroundColor: ['#19c3ed', '#47d6e2', '#62dfd9'],
          borderWidth: [0, 0, 0],
        },
      ],
      labels: wallets.map((wallet: WalletType) => wallet.currency),
      wallets,
    };
  }

  options = {
    circumference: 21 / 12 * Math.PI,
    rotation: 3 / 24 * Math.PI,
    cutoutPercentage: 60,
    legend: {
      display: false,
      position: 'bottom',
    },
    tooltips: {
      callbacks: {
        label(tooltipItem: Object, data: Object) {
          const wallet: WalletType = data.wallets[tooltipItem.index];
          const walletValue = walletCurrencyValueResolver.resolve(
            wallet.balance,
            wallet.currency,
          );
          return `${walletValue} ${wallet.currency}`;
        },
      },
    },
    onClick: () => {
      this.chart.chart_instance.options.legend.display ^= 1; // toggle boolean
      this.chart.chart_instance.update();
    },
  };

  chart = null;

  render() {
    const data = this.getData();
    return (
      <Content>
        <Top>
          <Card className="top">
            <div className="text-right">
              <Sidebar menu={menu} />
            </div>
            <Doughnut
              data={data}
              options={this.options}
              ref={chart => {
                this.chart = chart;
              }}
            />
          </Card>
          <div>
            <Transactions />
          </div>
        </Top>
        <FixedBottomNavigation menu={menu} />
      </Content>
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
