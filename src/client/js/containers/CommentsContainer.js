import { connect } from 'react-redux'
import CommentsList from '../components/CommentsList';

const mapStateToProps = state => {
  return {
    comments: state.comments,
    isFetchingComments: state.isFetchingComments,
    isAddingComment: state.isAddingComment
  }
}

const mapDispatchToProps = dispatch => {
   return {

   }
}

const CommentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsList)

export default CommentsContainer
