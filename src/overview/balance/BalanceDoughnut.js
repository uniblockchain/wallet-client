/* eslint-disable no-bitwise */
// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Doughnut, Chart } from 'react-chartjs-2';
import type { MapStateToProps } from 'react-redux';
import styled from 'styled-components';

import { Wallet } from '../../wallet/walletState';
import withWallet from '../../wallet/withWallet';

type Props = {
  wallets: Array<Wallet>,
  currency: string,
};

// Ugly AF, but it works.
const originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
  draw(args) {
    originalDoughnutDraw.apply(this, ...args);

    const { width, outerRadius, ctx } = this.chart;
    const { datasets } = this.chart.config.data;

    const fullHeight = this.chart.canvas.style.height;
    const fontSize = parseInt(fullHeight, 10) / 200; // magic number :o

    ctx.font = `${fontSize}em Favorit`;
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

export class BalanceDoughnut extends Component<Props> {
  getData() {
    const { wallets, currency } = this.props;
    const walletBalances = this.getBalances(wallets, currency);
    const totalWalletBalance = this.getTotalBalance(wallets, currency);

    // a hack that makes sure the dougnut is rendered even if all datapoints are 0
    if (totalWalletBalance <= 0 && walletBalances.length > 0) {
      walletBalances[0] = 1e-10;
    }

    return {
      datasets: [
        {
          data: walletBalances,
          backgroundColor: ['#19c3ed', '#47d6e2', '#62dfd9'],
          borderWidth: [0, 0, 0],
        },
      ],
      labels: wallets.map((wallet: Wallet) => wallet.currency),
      wallets,
    };
  }

  getOptions() {
    const { wallets, currency } = this.props;
    const totalBalance = this.getTotalBalance(wallets, currency);
    return {
      responsive: true,
      maintainAspectRatio: false,
      circumference: 21 / 12 * Math.PI,
      rotation: 3 / 24 * Math.PI,
      cutoutPercentage: 60,
      legend: {
        display: wallets.length > 1 && totalBalance > 0,
        position: 'bottom',
      },
      tooltips: {
        callbacks: {
          label(tooltipItem: Object, data: Object) {
            const wallet: Wallet = new Wallet(data.wallets[tooltipItem.index]);
            return `${wallet.getBalance().toFixed(6)} ${wallet.currency}`;
          },
        },
      },
      onClick: () => {
        (this.chart || {}).chart_instance.options.legend.display ^= 1; // toggle boolean
        (this.chart || {}).chart_instance.update();
      },
    };
  }

  getBalances(wallets: Array<Wallet>, currency: string) {
    return wallets.map((wallet: Wallet) =>
      new Wallet(wallet).getRepresentationalBalance(currency),
    );
  }

  getTotalBalance(wallets: Array<Wallet>, currency: string) {
    const walletBalances = this.getBalances(wallets, currency);
    return walletBalances.reduce(
      (balance1, balance2) => balance1 + balance2,
      0,
    );
  }

  chart = {};

  render() {
    const DoughnutContainer = styled.div`
      height: 30vh;
    `;
    return (
      <DoughnutContainer>
        <Doughnut
          data={this.getData()}
          options={this.getOptions()}
          ref={chart => {
            this.chart = chart;
          }}
        />
      </DoughnutContainer>
    );
  }
}

const mapStateToProps: MapStateToProps<*, *, *> = state => ({
  wallets: state.wallet ? state.wallet.wallets : [],
  currency: state.wallet ? state.wallet.currency : undefined,
});

export default withWallet(connect(mapStateToProps)(BalanceDoughnut));
