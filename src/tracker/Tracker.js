// @flow

import config from 'react-global-configuration';
import mixpanel from 'mixpanel-browser';
import { initialize as initializeErrorTracking } from './ErrorTracker';
import type { UserState } from '../user/userState';

const isProduction = (): boolean =>
  (process.env.REACT_APP_ENV || process.env.NODE_ENV) === 'production';

export function initialize(): void {
  initializeErrorTracking();
  if (isProduction()) {
    mixpanel.init(config.get('mixpanelToken'));
  }
}

export function track(event: string, data: ?Object = undefined): void {
  if (isProduction()) {
    mixpanel.track(event, data);
  }
}

export function signup(userId: number): void {
  if (isProduction()) {
    mixpanel.alias(userId);
  }
}

export function trackSend(currency: string, amount: number): void {
  if (isProduction()) {
    mixpanel.people.increment(`${currency}_sent`, amount);
  }
}

export function setUser(user: UserState): void {
  if (isProduction()) {
    mixpanel.people.set({
      id: user.id,
      $email: user.email,
    });

    mixpanel.identify(user.id);
  }
}

export default {
  initialize,
  track,
  setUser,
  signup,
};
