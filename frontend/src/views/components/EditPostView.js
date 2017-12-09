import React, { Component } from 'react'
import {  EditablePost } from '../../posts'

class EditPostView extends Component {

  handleSubmit = () => {
    const { history } = this.props
    history.goBack()
  }
  
  render() {
    const { postId } = this.props.match.params;
    return (
      <div>
        <nav className="navbar navbar-light bg-light mb-2">
          <span className="navbar-brand">Editing Post</span>
        </nav>
        <div className="row justify-content-center">
          <div className="col-8">
            <EditablePost postId={postId} afterSubmitCallback={this.handleSubmit} />
          </div>
        </div>
      </div>
    )
  }
}


export default EditPostView