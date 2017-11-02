/* eslint-disable no-bitwise */
// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Doughnut, Chart } from 'react-chartjs-2';
import type { MapStateToProps } from 'react-redux';
import { LinearProgress } from 'material-ui';
import { ThemeProvider } from 'styled-components';
import { Card, Header, PrimaryButton, BlueTheme } from '../ui';

import walletCurrencyValueResolver from '../wallet/walletCurrencyValueResolver';
import type { Wallet as WalletType } from '../wallet/walletState';
import Transactions from './transactions';
import { Slider, Slide } from '../ui/slider';
import withWallet from '../wallet/withWallet';

type Props = {
  wallets: Array<WalletType>,
  fetchWallet: () => *,
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
    let text = sum.toLocaleString('en-US', {
      style: 'currency',
      currency: 'EUR',
    });
    let textX = Math.round((width - ctx.measureText(text).width) / 2);
    const textY = outerRadius;

    ctx.fillText(text, textX, textY * 1.12);

    text = 'Balance';
    textX = Math.round((width - ctx.measureText(text).width) / 2);
    ctx.fillText(text, textX, textY * 0.88);
  },
});

export class Overview extends Component<Props> {
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
      (this.chart || {}).chart_instance.options.legend.display ^= 1; // toggle boolean
      (this.chart || {}).chart_instance.update();
    },
  };

  chart = {};

  render() {
    const { wallets } = this.props;

    const data = this.getData();
    return (
      <div>
        <Card>
          <Doughnut
            data={data}
            options={this.options}
            ref={chart => {
              this.chart = chart;
            }}
          />
        </Card>
        {wallets.length === 0 ? <LinearProgress /> : ''}
        <Slider>
          <div>
            <Slide>
              <Header>Congratulations</Header>
              <p>Your account is now ready</p>
              <PrimaryButton>Cool, what next</PrimaryButton>
            </Slide>
          </div>
          <div>
            <ThemeProvider theme={BlueTheme}>
              <Slide>
                <Header>Order your card</Header>
                <p>
                  Make everyday purchases with Bitcoin and other
                  cryptocurrencies
                </p>
                <PrimaryButton>Order here</PrimaryButton>
              </Slide>
            </ThemeProvider>
          </div>
          <div>
            <Slide>
              <Header>Deposit funds</Header>
              <p>Start by depositing Bitcoin to your account</p>
              <PrimaryButton>Learn more</PrimaryButton>
            </Slide>
          </div>
        </Slider>
        <Card title="Activity">
          <Transactions />
        </Card>
      </div>
    );
  }
}

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  wallets: state.wallet ? state.wallet.wallets : [],
});

export default withWallet(connect(mapStateToProps)(Overview));
