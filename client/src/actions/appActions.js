import * as types from './actionTypes';

function url(){
  return 'www.url.com';
}

export function receiveApps(json){
  return {type: types.RECEIVE_APPS, stuff: json.stuff};
}

export function fetchApps(){
  return dispatch => {
    return fetch(url(), {
       method: 'GET',
       mode: 'cors',
       credentials: 'include',
       headers: {
         'x-api-key': apiKey,
         'Accept': 'application/json'
     }
    })
    .then(response => response.json())
    .then(json => dispatch(receiveStuff(json)));
  }
}
