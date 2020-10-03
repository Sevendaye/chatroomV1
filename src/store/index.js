import { createStore, applyMiddleware, compose } from 'redux';
import debug from 'src/middlewares/logger';
import auth from 'src/middlewares/authMiddleware';
import socketMiddleware from 'src/middlewares/socketMiddleware';

import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// L'ordre des middlewares est important, il est pris en compte
const store = createStore(reducer,
  composeEnhancers(applyMiddleware(debug, auth, socketMiddleware)));

export default store;
