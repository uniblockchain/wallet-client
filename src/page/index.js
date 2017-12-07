import pageTemplate from './pageTemplate';
import pageActions from './pageActions';
import requireAuthentication from '../requireAuthentication';

export { default as pageTemplate } from './pageTemplate';
export { default as pageReducer } from './pageReducer';
export { default as pageActionTypes } from './pageActionTypes';
export { default as pageActions } from './pageActions';
export const authenticatedPage = component =>
  requireAuthentication(pageTemplate(component));

export default { pageTemplate, pageActions };
