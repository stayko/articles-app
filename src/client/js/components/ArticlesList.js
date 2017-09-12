import React from 'react';
import ReactDOM from 'react-dom';
import ArticleListItem from './ArticleListItem';

class ArticleList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { articles } = this.props;
    let id = 0;
    return <div className="article-list">
              <h1>Articles List</h1>
              <section>
                {articles.map((article)=>(<ArticleListItem key={id++} id={id} title={article.title} text={article.text} imageUrl={article.imageUrl} />))}
              </section>
              <button>Load Next</button>
            </div>;
  }
}

export default ArticleList;
