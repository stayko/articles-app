import { connect } from 'react-redux'
import ArticleView from './ArticleView';

const mapStateToProps = state => {
  return {
    articles: state.articles
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const ContainerArticleView = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleView)

export default ContainerArticleView;
