// @flow

const SHOW_MODAL = '@page/SHOW_MODAL';

export type ShowModal = {
  +type: '@page/SHOW_MODAL',
  +showModal: boolean,
};

export type PageAction = ShowModal;

export default {
  SHOW_MODAL,
};
