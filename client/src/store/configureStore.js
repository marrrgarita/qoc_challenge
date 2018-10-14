import {compose, createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunkMiddleware from 'redux-thunk';
import thunk from 'redux-thunk';


const enhancer = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)
export default function configureStore() {
  return createStore(
    rootReducer, applyMiddleware(thunk)
  );
}
