import type { Transaction as TransactionType } from '../../../../wallet/walletState';

export type TransactionInfo = {
  baseURL: string,
  siteName: string,
};

export function getTransactionInfo(
  transaction: TransactionType,
): TransactionInfo {
  const transactionInfo = {
    ETH: {
      baseURL: 'https://etherscan.io/tx/',
      siteName: 'Etherscan',
    },
    BTC: {
      baseURL: 'https://live.blockcypher.com/btc/tx/',
      siteName: 'Blockcypher',
    },
    LTC: {
      baseURL: 'https://live.blockcypher.com/ltc/tx/',
      siteName: 'Blockcypher',
    },
  };

  if (!transactionInfo[transaction.currency]) {
    console.error(
      `Transaction overview URL for currency ${transaction.currency} not added!`,
    );
  }
  return transactionInfo[transaction.currency];
}
