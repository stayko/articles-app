const api = require('../../../api');
import * as actionTypes from './actionConstants';

function loadCommentsStart(){
  return {
    type: actionTypes.LOAD_COMMENTS_START
  }
}

function loadCommentsComplete(data) {
  return {
    type: actionTypes.LOAD_COMMENTS_COMPLETE,
    data
  }
}

export function loadComments(articleId){
  return function(dispatch){
    dispatch(loadCommentsStart());
    api.loadComments({ articleId }).then((result) => {
      dispatch(loadCommentsComplete(result.data));
    }).catch(error => {
      throw new Error(error);
    });
  }
}

function addCommentStart(){
  return {
    type: actionTypes.ADD_COMMENT_START
  }
}

function addCommentComplete(data){
  return {
    type: actionTypes.ADD_COMMENT_COMPLETE,
    data
  }
}

export function addComment(articleId, text){
  return function(dispatch){
    dispatch(addCommentStart());
    api.addComment({ articleId, text }).then((result) => {
      dispatch(addCommentComplete(result.data));
    }).catch(error => {
      throw new Error(error);
    });
  }
}
