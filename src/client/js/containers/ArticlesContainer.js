import { connect } from 'react-redux'
import { loadArticles } from '../actions/actionCreators'
import { bindActionCreators } from 'redux'
import ArticlesList from '../components/ArticlesList';

const mapStateToProps = state => {
  return {
    articles: state.articles,
    isFetching: state.isFetching
  }
}

const mapDispatchToProps = dispatch => {
   return bindActionCreators({ loadArticles }, dispatch)
}

const ArticlesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlesList)

export default ArticlesContainer
