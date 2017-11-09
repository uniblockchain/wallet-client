// @flow

const BLUR = '@page/BLUR';
const SHOW_PROGRESS = '@page/SHOW_PROGRESS';

export type Blur = {|
  +type: '@page/BLUR',
  +blur: boolean,
|};

export type ShowProgress = {|
  +type: '@page/SHOW_PROGRESS',
  +showProgress: boolean,
|};

export type PageAction = Blur | ShowProgress;

export default {
  BLUR,
  SHOW_PROGRESS,
};
