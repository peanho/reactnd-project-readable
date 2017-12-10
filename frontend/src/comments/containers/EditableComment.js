import React, { Component } from 'react'
import { connect } from 'react-redux'
import { create, update } from '../actions'

class EditableComment extends Component {

  constructor(props) {
    super(props)
    const { comment } = props
    this.state = { ...comment }
  }

  componentWillReceiveProps = nextProps => {
    if (this.props.comment !== nextProps.comment) {
      this.setState({ ...nextProps.comment })
    }
  }

  handleChangeBody = event => {
    const body = event.target.value
    this.setState({
      body
    })
  }

  handleChangeAuthor = event => {
    const author = event.target.value
    this.setState({
      author
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { onSubmit, afterSubmitCallback } = this.props
    const comment = {
      ...this.state,
      timestamp: Date.now()
    }
    onSubmit(comment)
    afterSubmitCallback()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="content">Comment</label>
          <textarea
            id="content"
            className="form-control"
            rows="5"
            value={this.state.body}
            onChange={this.handleChangeBody}
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            id="author"
            type="text"
            className="form-control"
            value={this.state.author}
            onChange={this.handleChangeAuthor}
          />
        </div>
        <div className="form-group">
          <input type="submit" className="btn btn-success" value="Save" />
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    comment: state.comments.byId[ownProps.commentId] || {
      parentId: ownProps.postId,
      title: '',
      body: '',
      author: ''
    }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { commentId } = ownProps
  const actionCreator = commentId ? update : create
  return {
    onSubmit: comment => dispatch(actionCreator(comment))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditableComment)
