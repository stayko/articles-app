import { connect } from 'react-redux'
import * as commentActions from '../actions/commentActions'
import { bindActionCreators } from 'redux'
import CommentForm from '../components/CommentForm';

const mapStateToProps = (state, ownProps) => {
  return {
    isAddingComment: state.isAddingComment
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(commentActions, dispatch)
  }
}

const CommentFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm)

export default CommentFormContainer;
