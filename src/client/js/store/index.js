import { applyMiddleware, createStore, compose }  from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import reducers from "../reducers";
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import initialState from '../reducers/initialState';

const h = createHistory();
const enhancers = compose(
  applyMiddleware(thunk, createLogger(), routerMiddleware(h)),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
);

const store = createStore(reducers, initialState, enhancers);
export const history = h;
export default store;
