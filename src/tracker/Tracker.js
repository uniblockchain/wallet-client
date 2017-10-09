// @flow

import { initialize as initializeErrorTracking } from './ErrorTracker';

export function initialize(): void {
  initializeErrorTracking();
}

export default { initialize };
