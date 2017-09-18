import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { unixTimeToDate } from '../utils'
import '../../css/comments.scss';

class CommentItem extends React.Component {

  render() {
    const {comment} = this.props;
    return (
      <div className="comment-item">
        <div><strong>{comment.author}</strong>&nbsp;<em>{unixTimeToDate(comment.createdAt)}</em></div>
        <div className="comment-and-actions">
          <div className="comment-text">{comment.text}</div>
          <div className="comment-replies"><a href="#">{comment.repliesCount} replies</a></div>
          <div className="comment-reply-button"><a href="#">reply</a></div>
        </div>
      </div>
    )
  }
}

export default CommentItem;
