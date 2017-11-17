// @flow

import mixpanel from 'mixpanel-browser';
import config from 'react-global-configuration';

const mockErrorTracker = jest.genMockFromModule('./ErrorTracker');
jest.mock('./ErrorTracker', () => mockErrorTracker);

const { initialize, track } = require('./Tracker');

describe('tracker', () => {
  beforeEach(() => {
    mockErrorTracker.initialize.mockClear();
  });

  it('can initialize', () => {
    config.set({ mixpanelToken: 'some token' });
    initialize();
    expect(mockErrorTracker.initialize).toHaveBeenCalledTimes(1);
  });

  describe('tracks in production', () => {
    beforeEach(() => {
      process.env.REACT_APP_ENV = 'production';
    });

    afterEach(() => {
      process.env.REACT_APP_ENV = undefined;
    });

    it('can track an event', () => {
      const event = 'SAMPLE_EVENT';

      track(event);
      expect(mixpanel.track).toHaveBeenCalled();
      expect(mixpanel.track).toHaveBeenCalledWith(event, undefined);
    });

    it('can track an event with data', () => {
      const event = 'SAMPLE_EVENT';
      const data = { sample: 'data' };

      track(event, data);
      expect(mixpanel.track).toHaveBeenCalled();
      expect(mixpanel.track).toHaveBeenCalledWith(event, data);
    });
  });
});
