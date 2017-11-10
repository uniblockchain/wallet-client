// @flow

const cardInterestApi = jest.genMockFromModule('fs');

export const promise: Promise<*> = Promise.resolve();

export const registerInterest = jest.fn(() => promise);

cardInterestApi.registerInterest = registerInterest;

export default cardInterestApi;
