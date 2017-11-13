// @flow
import { address as converter } from 'bitcoinjs-lib';

export type LitecoinAddress = {
  address: string,
  type: string,
  version: number,
};

export const convertLitecoinAddress = (ltcAddress: string): LitecoinAddress => {
  const decodedAddress = converter.fromBase58Check(ltcAddress);
  let { version } = decodedAddress;
  let type = '';

  switch (version) {
    case 5:
      type = 'Mainnet p2sh address';
      version = 50;
      break;
    case 50:
      type = 'Mainnet p2sh address (deprecated)';
      version = 5;
      break;
    case 196:
      type = 'Testnet p2sh address';
      version = 58;
      break;
    case 58:
      type = 'Testnet p2sh address (deprecated)';
      version = 196;
      break;
    default:
      console.error('Unknown Litecoin address version', ltcAddress);
  }
  const address = converter.toBase58Check(decodedAddress.hash, version);
  return {
    address,
    type,
    version,
  };
};

export default { convertLitecoinAddress };
