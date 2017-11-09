// @flow

import pageReducer from './pageReducer';
import pageActions from './pageActions';
import { initialPageState } from './pageState';

describe('page reducer', () => {
  it('blurs page', () => {
    let blurPage = true;
    let action = pageActions.blur(blurPage);
    let newState = pageReducer(initialPageState, action);
    expect(newState.blur).toEqual(blurPage);
    blurPage = false;
    action = pageActions.blur(blurPage);
    newState = pageReducer(initialPageState, action);
    expect(newState.blur).toEqual(blurPage);
  });

  it('shows progress', () => {
    let showProgress = true;
    let action = pageActions.showProgress(showProgress);
    let newState = pageReducer(initialPageState, action);
    expect(newState.showProgress).toEqual(showProgress);
    showProgress = false;
    action = pageActions.showProgress(showProgress);
    newState = pageReducer(initialPageState, action);
    expect(newState.showProgress).toEqual(showProgress);
  });
});
