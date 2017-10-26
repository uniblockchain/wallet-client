// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'material-ui';
import sendActions from './sendActions';
import type { SendTransactionRequest } from './sendActionTypes';

type Props = {
  walletId: number,
  sendTransaction: (
    address: string,
    amount: number,
    walletId: number,
  ) => SendTransactionRequest,
};

export const Send = ({ walletId, sendTransaction }: Props) => (
  <div>
    {/* TODO: add form fields instead of hardcoded values */}
    <Button
      onClick={() =>
        sendTransaction(
          '0x6ed2213d16e6892fcc8573cf69a73be8b88e41d1',
          1000000,
          walletId,
        )}
    >
      Send
    </Button>
  </div>
);

const mapStateToProps = state => ({
  walletId: state.wallet.activeId || 1, // TODO: remove "|| 1"
});

const mapDispatchToProps = {
  sendTransaction: sendActions.sendTransactionRequested,
};

export default connect(mapStateToProps, mapDispatchToProps)(Send);
