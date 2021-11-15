import * as storage from 'redux-storage';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import filter from 'redux-storage-decorator-filter';
import thunk from 'redux-thunk';
import createEngine from 'redux-storage-engine-reactnativeasyncstorage';

import * as reducers from '../reducers';

console.log('reducers', reducers);

const reducer = storage.reducer(combineReducers(reducers));

// Storage engine
let engine = createEngine('gredTest/v0.0.01'); // CURRENT v0.0.01
engine = filter(engine, []);
const middleware = storage.createMiddleware(engine);

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  middleware,
)(createStore);
const store = createStoreWithMiddleware(reducer);

// load the store
const load = storage.createLoader(engine);

load(store)
  .then(newState => {
    console.log('Loaded state:', newState);
    // store.dispatch({type: 'INIT_STATE_LOADED'});
  })
  .catch(() => console.log('Failed to load previous state'));

store.subscribe(() => console.log(store.getState()));

export default store;
