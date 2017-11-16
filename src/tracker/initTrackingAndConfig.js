import mixpanel from 'mixpanel-browser';
import config from 'react-global-configuration';
import configuration from '../configuration';
import tracker from '.';

configuration.initialize();
tracker.initialize();
mixpanel.init(config.get('mixpanelToken'));
