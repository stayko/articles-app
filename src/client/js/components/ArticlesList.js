import React from 'react';
import ReactDOM from 'react-dom';
import ArticleItemContainer from '../containers/ArticleItemContainer';
import Spinner from './Spinner';
import LoadingButton from './LoadingButton';

class ArticleList extends React.Component {

  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    this.props.actions.loadArticles(0,4);
  }

  articleRow(article, i){
    return (
      <ArticleItemContainer location={location.pathname} key={i} id={article.id} title={article.title} text={article.text} imageUrl={article.imageUrl} commentsCount={article.commentsCount} />
    );
  }

  clickHandler(){
    this.props.actions.loadArticles(this.props.articles.length,4);
  }

  render() {
    const { articles, isFetchingArticles } = this.props;
    return <div className="article-list">
            <div className="articles-holder">
              <h1>Articles List</h1>
              <section>
                {articles.length === 0 ? <Spinner /> : articles.map(this.articleRow, this)}
              </section>
              {articles.length > 0 && <LoadingButton isLoading={isFetchingArticles} clickHandler={this.clickHandler} />}
            </div>
           </div>;
  }
}

export default ArticleList;
