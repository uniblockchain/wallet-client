// @flow

import mixpanel from 'mixpanel-browser';
import config from 'react-global-configuration';
import type { UserState } from '../user/userState';
import { initialize as initializeErrorTracking } from './ErrorTracker';

export const isProduction = (): boolean =>
  (process.env.REACT_APP_ENV || process.env.NODE_ENV) === 'production';

const hasPassword = data =>
  data &&
  JSON.stringify(data)
    .toLowerCase()
    .includes('password');

export function initialize(): void {
  initializeErrorTracking();
  if (isProduction()) {
    mixpanel.init(config.get('mixpanelToken'));
  }
}

export function track(event: string, data: ?Object = undefined): void {
  if (isProduction() && !hasPassword(data)) {
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
