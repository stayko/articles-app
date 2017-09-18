import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import CommentFormContainer from '../containers/CommentFormContainer';
import CommentsContainer from '../containers/CommentsContainer';

class ArticleView extends React.Component {

  render() {
    const { title, imageUrl, text, id } = this.props.article;
    return (
            <section className="view-section">
              <article className="article-view">
                <h2>{title}</h2>
                <figure><img src={imageUrl} /></figure>
                <div>{text}</div>
              </article>
              <CommentFormContainer id={id} />
              <CommentsContainer />
            </section>
          );
  }
}

ArticleView.defaultProps = {
  imageUrl: "http://via.placeholder.com/300x100",
  title: "This is a title",
  text: "This is text",
  comments: []
};

ArticleView.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  comments: PropTypes.array
}

export default ArticleView;
