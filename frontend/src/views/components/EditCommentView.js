import React, { Component } from 'react'
import { EditableComment } from '../../comments'

class EditCommentView extends Component {

  handleSubmit = () => {
    const { history } = this.props
    history.goBack()
  }

  render() {
    const { postId, commentId } = this.props.match.params;
    return (
      <div>
        <nav className="navbar navbar-light bg-light mb-2">
          <span className="navbar-brand">Comment</span>
        </nav>
        <div className="row justify-content-center">
          <div className="col-8">
            <EditableComment 
              postId={postId}
              commentId={commentId}
              afterSubmitCallback={this.handleSubmit}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default EditCommentView