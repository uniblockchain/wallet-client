// @flow

import config from 'react-global-configuration';
import mixpanel from 'mixpanel-browser';
import { initialize as initializeErrorTracking } from './ErrorTracker';

export function initialize(): void {
  initializeErrorTracking();
  mixpanel.init(config.get('mixpanelToken'));
}

export function track(event: string, data: Object): void {
  mixpanel.track(event, data);
}

export default { initialize, track };
