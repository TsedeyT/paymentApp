import {types} from '../constants/action-types';

import {url} from '../config';

export const GET_CONTENT = () => {
  return (dispatch, getState) => {
    const state = getState();
    const data = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'content-type': 'Application/json',
      },
    };

    return fetch(url, data)
      .then(res => res.json())
      .then(json => {
        console.log('result', json);
        dispatch(GET_TEXT_CONTENT(json));
      })
      .catch(err => dispatch(GET_TEXT_CONTENT(err)));
  };
};
export const GET_ERROR = error => ({
  type: types.CONTENT_ERROR,
  payload: error,
});

export const GET_TEXT_CONTENT = results => ({
  type: types.TEXT_CONTENT,
  payload: results,
});
