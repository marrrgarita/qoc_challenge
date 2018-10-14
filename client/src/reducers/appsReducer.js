import initialState from './initialState';
import {FETCH_APPS, RECEIVE_APPS} from '../actions/actionTypes';

export default function apps(state = initialState.apps, action){
  let newState;
  switch (action.type){
    case FETCH_APPS:
      console.log('FETCH APPS')
      return action;
    case RECEIVE_APPS:
      console.log('RECEIVE APPS');
      console.log(action.apps);
      let newState = action.apps;
      return newState;
    default:
      return state;
  }
}
