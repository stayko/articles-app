import { combineReducers } from "redux";
import { articles, isFetching } from "./articlesReducer";
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  articles,
  isFetching,
  router: routerReducer
})
