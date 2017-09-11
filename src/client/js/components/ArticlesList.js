import React from 'react';
import ReactDOM from 'react-dom';
import ArticleListItem from './ArticleListItem';

class ArticleList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="article-list">
            <h1>Articles List</h1>
            <section>
              <ArticleListItem />
            </section>
          </div>;
  }
}

export default ArticleList;
