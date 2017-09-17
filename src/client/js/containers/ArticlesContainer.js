import { connect } from 'react-redux'
import * as articleActions from '../actions/articleActions'
import { bindActionCreators } from 'redux'
import ArticlesList from '../components/ArticlesList';

const mapStateToProps = state => {
  return {
    articles: state.articles,
    isFetchingArticles: state.isFetchingArticles
  }
}

const mapDispatchToProps = dispatch => {
   return {
     actions: bindActionCreators(articleActions, dispatch)
   }
}

const ArticlesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlesList)

export default ArticlesContainer
