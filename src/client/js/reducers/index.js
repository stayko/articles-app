import { combineReducers } from "redux";
import { articles, isFetchingArticles } from "./articlesReducer";
import { comments, isFetchingComments, isAddingComment } from "./commentsReducer";
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  articles,
  comments,
  isFetchingArticles,
  isFetchingComments,
  isAddingComment,
  router: routerReducer
})
