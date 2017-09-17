import { combineReducers } from "redux";
import { articles, isFetchingArticles } from "./articlesReducer";
import { comments, isFetchingComments } from "./commentsReducer";
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  articles,
  comments,
  isFetchingArticles,
  isFetchingComments,
  router: routerReducer
})
