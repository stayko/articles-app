import React from 'react';
import ReactDOM from 'react-dom';
import ArticleListItem from './ArticleListItem';

class ArticleList extends React.Component {
  render() {
    const { articles } = this.props;
    return <div className="article-list">
              <h1>Articles List</h1>
              <section>
                {articles.map((article, i)=>(<ArticleListItem key={i} id={i} title={article.title} text={article.text} imageUrl={article.imageUrl} />))}
              </section>
              <button>Load Next</button>
            </div>;
  }
}

export default ArticleList;
