import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import Spinner from './Spinner';
import CommentItem from './CommentItem';
import '../../css/comments.scss';

class CommentsList extends React.Component {

  renderRow(comment, i){
    return <CommentItem key={i} comment={comment} />
  }

  getComments(){
    if(this.props.isFetchingComments){
        return <Spinner />;
    } else {
      if(this.props.comments.length > 0){
          return this.props.comments.map(this.renderRow);
      } else {
          return <div className="no-comments">There are no comments yet.</div>
      }
    }
  }

  render() {
    return (
      <div className="comments-list">
        <div>{this.getComments()}</div>
        {this.props.isAddingComment && <Spinner />}
      </div>
    );
  }
}

export default CommentsList;
