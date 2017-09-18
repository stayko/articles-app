import { connect } from 'react-redux'
import ArticleView from '../components/ArticleView';

const mapStateToProps = (state, ownProps) => {
  const { articleId } = ownProps.match.params;
  return {
    article: state.articles[articleId]
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

const ViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleView)

export default ViewContainer;
