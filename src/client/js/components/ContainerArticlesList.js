import { connect } from 'react-redux'
import ArticlesList from './ArticlesList';

const mapStateToProps = state => {
  return {
    articles: state.articles
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const ContainerArticlesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlesList)

export default ContainerArticlesList
