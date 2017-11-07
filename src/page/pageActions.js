// @flow

import pageActionTypes, { type ShowModal } from './pageActionTypes';

const showModal = (show: boolean): ShowModal => ({
  type: pageActionTypes.SHOW_MODAL,
  showModal: show,
});

export default {
  showModal,
};
