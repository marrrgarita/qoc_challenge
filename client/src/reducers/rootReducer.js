import {combineReducers} from 'redux';
import apps from './appsReducer';

const rootReducer = combineReducers({
  apps
});

export default rootReducer;
