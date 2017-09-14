import React from 'react';
import ReactDOM from 'react-dom';
import ArticleListItem from './ArticleListItem';
import Spinner from './Spinner';
import LoadingButton from './LoadingButton';

class ArticleList extends React.Component {

  componentDidMount() {
    this.props.loadArticles(0,4);
  }

  render() {
    const { articles, isFetching } = this.props;
    return <div className="article-list">
              <h1>Articles List</h1>
              <section>
                {articles.length === 0 ? <Spinner /> : articles.map((article, i)=>(<ArticleListItem key={i} id={i} title={article.title} text={article.text} imageUrl={article.imageUrl} />))}
              </section>
              {articles.length > 0 ? <LoadingButton isLoading={isFetching} clickHandler={()=>{this.props.loadArticles(articles.length,4)}}  /> : ''}
            </div>;
  }
}

export default ArticleList;
