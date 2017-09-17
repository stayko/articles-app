import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import '../../css/comments.scss';

class CommentForm extends React.Component {

  render() {
    return (
      <section className="comments-form">
        <h3>Comments</h3>
        <textarea placeholder="Enter comments here..."></textarea>
      </section>
    );
  }
}

export default CommentForm;
