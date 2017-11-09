// @flow

import pageActionTypes, {
  type Blur,
  type ShowProgress,
} from './pageActionTypes';

const blur = (blurIt: boolean): Blur => ({
  type: pageActionTypes.BLUR,
  blur: blurIt,
});

const showProgress = (show: boolean): ShowProgress => ({
  type: pageActionTypes.SHOW_PROGRESS,
  showProgress: show,
});

export default {
  blur,
  showProgress,
};
