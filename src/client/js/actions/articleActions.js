const api = require('../../../api');
import * as actionTypes from './actionConstants';

function loadArticlesStart(){
  return {
    type: actionTypes.LOAD_ARTICLES_START
  }
}

function loadArticlesComplete(data) {
  return {
    type: actionTypes.LOAD_ARTICLES_COMPLETE,
    data
  }
}

export function loadArticles(offset, limit){
  return function(dispatch){
    dispatch(loadArticlesStart());
    api.loadArticles({ offset, limit }).then((result) => {
      dispatch(loadArticlesComplete(result.data));
    }).catch(error => {
      throw new Error(error);
    });
  }
}
