// @flow

import config from 'react-global-configuration';

const mockErrorTracker = jest.genMockFromModule('./ErrorTracker');
jest.mock('./ErrorTracker', () => mockErrorTracker);

const { initialize } = require('./Tracker');

describe('tracker', () => {
  beforeEach(() => {
    config.set({ mixpanelToken: 'some token' });
    mockErrorTracker.initialize.mockClear();
  });

  it('can initialize', () => {
    initialize();
    expect(mockErrorTracker.initialize).toHaveBeenCalledTimes(1);
  });
});
