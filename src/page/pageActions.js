// @flow

import pageActionTypes, {
  type ShowModal,
  type ShowProgress,
} from './pageActionTypes';

const showModal = (show: boolean): ShowModal => ({
  type: pageActionTypes.SHOW_MODAL,
  showModal: show,
});

const showProgress = (show: boolean): ShowProgress => ({
  type: pageActionTypes.SHOW_PROGRESS,
  showProgress: show,
});

export default {
  showModal,
  showProgress,
};
