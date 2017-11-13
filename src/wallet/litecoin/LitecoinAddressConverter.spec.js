// @flow
import { convertLitecoinAddress } from './LitecoinAddressConverter';

describe('Litecoin address converter', () => {
  it('correctly transforms LTC addresses', () => {
    const ltcAddress = 'QVS6ZCF7zcqqXfEDzGPtzaAvcvUaJpegV5';

    const convertedAddress = convertLitecoinAddress(ltcAddress);

    expect(convertedAddress.type).toBe('Testnet p2sh address (deprecated)');
    expect(convertedAddress.version).toBe(196);
    expect(convertedAddress.address).toBe(
      '2N25LSBNsyWnkPUUBNAMsusjVUY2kNzeS1T',
    );
  });
});
