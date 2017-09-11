import { LOAD_ARTICLES } from '../actions/actionCreators';

export function articles(state=[], action){
  switch (action.type){
    case LOAD_ARTICLES:
      return state.concat(action.articles);
  }
  return state;
}
