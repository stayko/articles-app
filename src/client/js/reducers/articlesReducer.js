import * as actionTypes from '../actions/actionConstants';
import initialState from '../reducers/initialState';

export function articles(state = initialState.articles, action){
  switch (action.type){
    case actionTypes.LOAD_ARTICLES_COMPLETE:
      return state.concat(action.data);
  }
  return state;
}

export function isFetchingArticles(state = initialState.isFetchingArticles, action){
  switch (action.type){
    case actionTypes.LOAD_ARTICLES_START:
      return true;
    case actionTypes.LOAD_ARTICLES_COMPLETE:
      return false
  }
  return state;
}
