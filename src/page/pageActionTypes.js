// @flow

const SHOW_MODAL = '@page/SHOW_MODAL';
const SHOW_PROGRESS = '@page/SHOW_PROGRESS';

export type ShowModal = {|
  +type: '@page/SHOW_MODAL',
  +showModal: boolean,
|};

export type ShowProgress = {|
  +type: '@page/SHOW_PROGRESS',
  +showProgress: boolean,
|};

export type PageAction = ShowModal | ShowProgress;

export default {
  SHOW_MODAL,
  SHOW_PROGRESS,
};
