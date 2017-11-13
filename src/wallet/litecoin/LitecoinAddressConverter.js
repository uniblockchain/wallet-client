// @flow
import bs58check from 'bs58check';

// copied from bitcoinjs-lib
const fromBase58Check = address => {
  const payload = bs58check.decode(address);

  if (payload.length < 21) throw new TypeError(`${address} is too short`);
  if (payload.length > 21) throw new TypeError(`${address} is too long`);

  const version = payload.readUInt8(0);
  const hash = payload.slice(1);

  return { version, hash };
};

// copied from bitcoinjs-lib
const toBase58Check = (hash, version) => {
  const payload = Buffer.allocUnsafe(21);
  payload.writeUInt8(version, 0);
  hash.copy(payload, 1);

  return bs58check.encode(payload);
};

export type LitecoinAddress = {
  address: string,
  type: string,
  version: number,
};

export const convertLitecoinAddress = (ltcAddress: string): LitecoinAddress => {
  const decodedAddress = fromBase58Check(ltcAddress);
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
  const address = toBase58Check(decodedAddress.hash, version);
  return {
    address,
    type,
    version,
  };
};

export default { convertLitecoinAddress };
