import * as actionTypes from '../actions/actionConstants';
import initialState from '../reducers/initialState';

export function comments(state = initialState.comments, action){
  switch (action.type){
    case actionTypes.LOAD_COMMENTS_COMPLETE:
      return [...action.data];
    case actionTypes.ADD_COMMENT_COMPLETE:
      return [...state, Object.assign({}, action.data)];
  }
  return state;
}

export function isFetchingComments(state = initialState.isFetchingComments, action){
  switch (action.type){
    case actionTypes.LOAD_COMMENTS_START:
      return true;
    case actionTypes.LOAD_COMMENTS_COMPLETE:
      return false;
  }
  return state;
}

export function isAddingComment(state = initialState.isAddingComment, action){
  switch (action.type){
    case actionTypes.ADD_COMMENT_START:
      return true;
    case actionTypes.ADD_COMMENT_COMPLETE:
      return false;
  }
  return state;
}
