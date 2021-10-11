// == Imports

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers/moviesReducer';

import moviesMiddleware from '../middlewares/moviesMiddleware';

// == Store

const enhancers = composeWithDevTools(
  applyMiddleware(
    moviesMiddleware,
  ),
 );
 
const store = createStore(
  reducer,
  enhancers,
);

// == Export

export default store;