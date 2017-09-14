import { LOAD_ARTICLES_START, LOAD_ARTICLES_COMPLETE } from '../actions/actionCreators';

export function articles(state=[], action){
  switch (action.type){
    case LOAD_ARTICLES_COMPLETE:
      return state.concat(action.data);
  }
  return state;
}

export function isFetching(state = false, action){
  switch (action.type){
    case LOAD_ARTICLES_START:
      return true;
    case LOAD_ARTICLES_COMPLETE:
      return false
  }
  return state;
}
