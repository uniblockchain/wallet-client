// @flow

import mixpanel from 'mixpanel-browser';
import config from 'react-global-configuration';
import type { ProfileState } from '../user/profile/profileState';
import type { UserState } from '../user/userState';

const mockErrorTracker = jest.genMockFromModule('./ErrorTracker');
jest.mock('./ErrorTracker', () => mockErrorTracker);

const { initialize, track, setUser, trackSend } = require('./Tracker');

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

      mixpanel.people = {
        set: jest.fn(),
        increment: jest.fn(),
      };
      mixpanel.track = jest.fn();
      mixpanel.identify = jest.fn();
    });

    afterEach(() => {
      process.env.REACT_APP_ENV = undefined;
    });

    it('can track an event', () => {
      const event = 'SAMPLE_EVENT';

      track(event);

      expect(mixpanel.track).toHaveBeenCalledTimes(1);
      expect(mixpanel.track).toHaveBeenCalledWith(event, undefined);
    });

    it('can track an event with data', () => {
      const event = 'SAMPLE_EVENT';
      const data = { sample: 'data' };

      track(event, data);

      expect(mixpanel.track).toHaveBeenCalledTimes(1);
      expect(mixpanel.track).toHaveBeenCalledWith(event, data);
    });

    it('never tracks password data', () => {
      const event = 'SAMPLE_EVENT';
      const data = { someData: 'password' };

      track(event, data);

      expect(mixpanel.track).not.toHaveBeenCalled();
    });

    it('can set user', () => {
      const profile: ProfileState = {
        id: 1,
        firstName: 'Jordan',
        lastName: 'Valdma',
        dateOfBirth: new Date('1908-02-01'),
        mobileNumber: '+3725555555',
        error: null,
      };

      const user: UserState = {
        id: 123,
        email: 'example@example.com',
        error: null,
        profile,
        isUsing2Fa: false,
        isVerified: false,
      };

      setUser(user);
      expect(mixpanel.people.set).toHaveBeenCalledTimes(1);
      expect(mixpanel.people.set).toHaveBeenCalledWith({
        id: user.id,
        $email: user.email,
      });
      expect(mixpanel.identify).toHaveBeenCalledTimes(1);
      expect(mixpanel.identify).toHaveBeenCalledWith(user.id);
    });

    it('can track money sent', () => {
      const currency: string = 'BTC';
      const amount: number = 123;

      trackSend(currency, amount);

      expect(mixpanel.people.increment).toHaveBeenCalledTimes(1);
      expect(mixpanel.people.increment).toHaveBeenCalledWith(
        `${currency}_sent`,
        amount,
      );
    });
  });
});
