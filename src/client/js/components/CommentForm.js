import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import '../../css/comments.scss';

class CommentForm extends React.Component {

  constructor(props){
    super(props);
    this.onEnterKey = this.onEnterKey.bind(this);
  }

  onEnterKey(e){
    if(e.keyCode == 13){
      e.preventDefault();
      const { id } = this.props;
      const comment = this.refs.commentArea.value;
      this.props.actions.addComment(id, comment);
      this.refs.commentForm.reset();
    }
  }

  render() {
    return (
      <section className="comments-form">
        <h3>Comments</h3>
        <form ref="commentForm" className="comment-form">
          <textarea disabled={this.props.isAddingComment} onKeyDown={this.onEnterKey} ref="commentArea" placeholder="Enter comments here..."></textarea>
        </form>
      </section>
    );
  }
}

export default CommentForm;
