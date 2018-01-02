// @flow

import config from 'react-global-configuration';
import { get } from '../../http';

export type CardPin = {
  pin: string,
};

const getPin = (cardId: number): Promise<CardPin> => {
  const corsToken = get(
    `${config.get('cardServiceApiUrl')}/v1/cards/${cardId}/pin-token`,
  ).pinToken;
  return get(
    `${config.get('waveCrestApiUrl')}/v3/services/cards/carddatavalidate`,
    {},
    {
      corsToken,
    },
  );
};

export default { getPin };
