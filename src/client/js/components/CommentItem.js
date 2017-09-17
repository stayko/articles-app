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
        <div>{comment.text}</div>
      </div>
    )
  }
}

export default CommentItem;
