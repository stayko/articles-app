import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class ArticleView extends React.Component {
  render() {
    const { title, imageUrl, text } = this.props.article;
    return  <article className="article-view">
              <h2>{title}</h2>
              <figure><img src={imageUrl} /></figure>
              <div>{text}</div>
            </article>
  }
}

ArticleView.defaultProps = {
  imageUrl: "http://via.placeholder.com/300x100",
  title: "This is a title",
  text: "This is text",
  comments: 0
};

ArticleView.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  comments: PropTypes.number
}

export default ArticleView;
