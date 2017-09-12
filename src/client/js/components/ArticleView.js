import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

class ArticleView extends React.Component {
  render() {

    const { articleId } = this.props.match.params;
    const { title, imageUrl, text } = this.props.articles[articleId];

    return  <section className="article-view">
              <h2>{title}</h2>
              <div><img src={imageUrl} /></div>
              <div>{text}</div>
            </section>
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
