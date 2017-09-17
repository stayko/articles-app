import * as actionTypes from '../actions/actionConstants';
import initialState from '../reducers/initialState';

export function comments(state = initialState.comments, action){
  switch (action.type){
    case actionTypes.LOAD_COMMENTS_COMPLETE:
      return [...action.data];
  }
  return state;
}

export function isFetchingComments(state = initialState.isFetchingComments, action){
  switch (action.type){
    case actionTypes.LOAD_COMMENTS_START:
      return true;
    case actionTypes.LOAD_COMMENTS_COMPLETE:
      return false
  }
  return state;
}
