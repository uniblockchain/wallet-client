// @flow
import 'isomorphic-fetch';
import store from '../reduxStore';

const TOKEN_STORAGE_KEY = 'accessToken';

function transformResponse(response) {
  if (response.ok && response.status < 400) {
    return response.json().catch(() => Promise.resolve());
  } else if (response.status >= 400) {
    // hax
    if (response.status === 401 && window.localStorage && window.location) {
      localStorage.removeItem(TOKEN_STORAGE_KEY);
      window.location.reload();
    }
    return response.json().then((data: any) => {
      const error = {};
      error.status = response.status;
      error.body = data;
      throw error;
    });
  }
  throw response;
}

function bearerTokenHeader(): * {
  const { token } = store.getState().login;
  if (token) {
    return { Authorization: `Bearer ${token}` };
  }
  return {};
}

function paramsToBody(params: any): * {
  const paramsType = typeof params;
  if (paramsType === 'string' || paramsType === 'FormData') {
    return params;
  }
  return JSON.stringify(params);
}

function urlEncodeParameters(params) {
  return Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');
}

export function get(url: string, params: * = {}, headers: * = {}): * {
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

export function post(url: string, params: * = {}, headers: * = {}): * {
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

export default { get, post };
