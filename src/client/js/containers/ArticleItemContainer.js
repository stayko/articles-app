import { connect } from 'react-redux'
import * as commentActions from '../actions/commentActions'
import { bindActionCreators } from 'redux'
import ArticleListItem from '../components/ArticleListItem';

const mapStateToProps = (state, ownProps) => {
  return {
    location: ownProps.location
  }
}

const mapDispatchToProps = dispatch => {
   return {
     actions: bindActionCreators(commentActions, dispatch)
   }
}

const ArticleItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleListItem)

export default ArticleItemContainer
