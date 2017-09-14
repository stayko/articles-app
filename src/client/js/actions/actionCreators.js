const api = require('../../../api');
export const LOAD_ARTICLES_START = 'LOAD_ARTICLES_START';
export const LOAD_ARTICLES_COMPLETE = 'LOAD_ARTICLES_COMPLETE';

export function loadArticlesStart(){
  return {
    type: LOAD_ARTICLES_START
  }
}

export function loadArticlesComplete(data) {
  return {
    type: LOAD_ARTICLES_COMPLETE,
    data
  }
}

export function loadArticles(offset, limit){
  return function(dispatch){
    dispatch(loadArticlesStart());
    api.loadArticles({ offset, limit }).then((result) => {
      dispatch(loadArticlesComplete(result.data));
    });
  }
}
