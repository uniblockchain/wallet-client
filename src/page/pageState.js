// @flow

export type PageState = {
  +showModal: ?boolean,
};

export const initialPageState: PageState = {
  showModal: false,
};

export default initialPageState;
