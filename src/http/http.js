// @flow
import 'isomorphic-fetch';
import store from '../reduxStore';

function transformResponse(response) {
  if (response.ok && response.status < 400) {
    return response.json();
  } else if (response.status >= 400) {
    return response.json().then((data: any) => {
      const error = {};
      error.status = response.status;
      error.body = data;
      throw error;
    });
  }
  throw response;
}

function urlEncodeParameters(params) {
  return Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');
}

export function get(url: string, params: any = {}, headers: any = {}) {
  const urlParameters = urlEncodeParameters(params);
  return fetch(`${url}${urlParameters ? `?${urlParameters}` : ''}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      ...bearerTokenHeader(),
      ...headers,
    },
    mode: 'cors',
    credentials: 'include',
    cache: 'default',
  }).then(transformResponse);
}

export function post(url: string, params: any = {}, headers: any = {}) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      ...bearerTokenHeader(),
      ...headers,
    },
    body: paramsToBody(params),
    credentials: 'include',
    mode: 'cors',
    cache: 'default',
  }).then(transformResponse);
}

function paramsToBody(params: any): any {
  const paramsType = typeof params;
  if (paramsType === 'string' || paramsType === 'FormData') {
    return params;
  }
  return JSON.stringify(params);
}

function bearerTokenHeader(): any {
  const { token } = store.getState().login;
  if (token) {
    return { Authorization: `Bearer ${token}` };
  }
  return {};
}

export default { get, post };
