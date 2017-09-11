import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

class ArticleView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return  <section className="article-view">
              <h2>{this.props.title}</h2>
              <div><img src={this.props.imageUrl} /></div>
              <div>{this.props.text}</div>
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
