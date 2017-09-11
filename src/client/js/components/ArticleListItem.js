import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class ArticleListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Link to="/view/1">
              <article className="article-list-item">
                  <figure className="list-item-figure"><img src={this.props.imageUrl} /></figure>
                  <div className="list-item-text">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.text}</p>
                    <p>{this.props.comments} comments</p>
                  </div>
               </article>
           </Link>
  }
}

ArticleListItem.defaultProps = {
  imageUrl: "http://via.placeholder.com/100x100",
  title: "This is a title",
  text: "This is text",
  comments: 0
};

ArticleListItem.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  comments: PropTypes.number
}

export default ArticleListItem;
