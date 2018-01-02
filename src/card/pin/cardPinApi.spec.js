// @flow

import config from 'react-global-configuration';
import type { CardPin } from './cardPinApi';

jest.mock('../../http');

const mockHttp = require('../../http');

const cardPinApi = require('./cardPinApi').default;

describe('card pin api', () => {
  const cardServiceApiUrl = 'card-api-url';
  const waveCrestApiUrl = 'wavecrest-api-url';

  beforeAll(() => {
    config.set({ cardServiceApiUrl, waveCrestApiUrl });
  });

  it('gets a card pin number', () => {
    const cardPin: CardPin = {
      pin: '1234',
    };

    const pinTokenResponse = {
      pinToken: '719KuOXYLLrPRlZ8120ccf51',
    };

    const pinCodeResponse = {
      errorDetails: [
        {
          errorCode: '0',
          errorDescription: 'Success',
        },
      ],
      pin: cardPin.pin,
    };

    mockHttp.get = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve(pinTokenResponse))
      .mockImplementationOnce(() => Promise.resolve(pinCodeResponse));

    return cardPinApi
      .getPin(1)
      .then(response => expect(response).toMatchObject(cardPin));
  });
});
