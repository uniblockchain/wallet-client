// @flow
import React from 'react';
import styled from 'styled-components';
import { withStyles } from 'material-ui';
import { PrimaryButton, WrappedContent } from '../../ui';

const ExchangeStatus = () => {
  return (
    <WrappedContent>
      <div>Sending Bitcoin to exchange</div>
      <div>
        BTC <span>to</span> LTC
      </div>
      <div>Conversion might take up to X minutes</div>
    </WrappedContent>
  );
};

export default ExchangeStatus;
