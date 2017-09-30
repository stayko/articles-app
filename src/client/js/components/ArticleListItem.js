import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { truncate } from '../utils'

class ArticleListItem extends React.Component {

  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(){
    this.props.actions.loadComments({articleId :this.props.id});
  }

  getArticle(){
    return (
      <article className="article-list-item">
          <figure className="list-item-figure"><img src={this.props.imageUrl} /></figure>
          <div className="list-item-text">
            <h3>{this.props.title}</h3>
            <p>{truncate(this.props.text, 20)}</p>
            <p className="comments-number">{this.props.commentsCount} comments</p>
          </div>
       </article>
    )
  }

  render() {
    const pathname = window.location.pathname;
    const isCurrent = pathname!="/" && pathname.split('/')[2] == this.props.id;

    if(isCurrent){
      return <div className="article-link active">
                  {this.getArticle()}
              </div>
    } else {
      return <NavLink onClick={this.clickHandler} className="article-link" activeClassName="active" to={`/view/${this.props.id}`}>
                {this.getArticle()}
             </NavLink>
    }
  }
}

ArticleListItem.defaultProps = {
  id: 1,
  imageUrl: "http://via.placeholder.com/100x100",
  title: "This is a title",
  text: "This is text",
  commentsCount: PropTypes.number
};

ArticleListItem.propTypes = {
  id: PropTypes.number,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  commentsCount: PropTypes.number
}

export default ArticleListItem;
