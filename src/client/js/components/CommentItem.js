import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { unixTimeToDate } from '../utils'
import '../../css/comments.scss';

class CommentItem extends React.Component {

  constructor() {
    super();
    this.viewReplies = this.viewReplies.bind(this);
    this.reply = this.reply.bind(this);
  }

  viewReplies(e){
    e.preventDefault();
    console.log(this.props.comment.id);
  }

  reply(e){
    e.preventDefault();
  }

  render() {
    const {comment} = this.props;
    return (
      <div className="comment-item">
        <div><strong>{comment.author}</strong>&nbsp;<em>{unixTimeToDate(comment.createdAt)}</em></div>
        <div className="comment-and-actions">
          <div className="comment-text">{comment.text}</div>
          <div className="comment-replies"><a href="#" onClick={this.viewReplies}>{comment.repliesCount} replies</a></div>
          <div className="comment-reply-button"><a href="#" onClick={this.reply}>reply</a></div>
        </div>
      </div>
    )
  }
}

export default CommentItem;
