import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

class ArticleListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <NavLink className="article-link" activeClassName="active" to={`/view/${this.props.id}`}>
              <article className="article-list-item">
                  <figure className="list-item-figure"><img src={this.props.imageUrl} /></figure>
                  <div className="list-item-text">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.text}</p>
                    <p className="comments-number">{this.props.comments.length} comments</p>
                  </div>
               </article>
           </NavLink>
  }
}

ArticleListItem.defaultProps = {
  id: 1,
  imageUrl: "http://via.placeholder.com/100x100",
  title: "This is a title",
  text: "This is text",
  comments: []
};

ArticleListItem.propTypes = {
  id: PropTypes.number,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  comments: PropTypes.array
}

export default ArticleListItem;
