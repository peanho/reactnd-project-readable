import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectors as categoriesSelector } from '../../categories'
import { create, update } from '../actions'

class EditablePost extends Component {

  static defaultProps = {
    post: {
      title: '',
      body: '',
      author: '',
      category: ''
    }
  }

  constructor(props) {
    super(props)
    const { post } = props
    this.state = { ...post }
  }

  handleChangeTitle = event => {
    const title = event.target.value
    this.setState({
      title
    })
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

  handleChangeCategory = event => {
    const category = event.target.value
    this.setState({
      category
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { onSubmit, afterSubmitCallback } = this.props
    const post = {
      ...this.state,
      timestamp: Date.now()
    }
    onSubmit(post)
    afterSubmitCallback()
  }

  render() {
    const { categories } = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            className="form-control"
            value={this.state.title}
            onChange={this.handleChangeTitle}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Body</label>
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
          <label htmlFor="category">Category</label>
          <select
            id="category"
            className="form-control"
            value={this.state.category}
            onChange={this.handleChangeCategory}
          >
            <option value="" disabled>Choose Category...</option>
            {categories.map(id => (
              <option key={id} value={id}>{id}</option>
            ))}
          </select>
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
    categories: categoriesSelector.getAllIds(state),
    post: state.posts.byId[ownProps.postId]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { postId } = ownProps
  const actionCreator = postId ? update : create
  return {
    onSubmit: post => dispatch(actionCreator(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditablePost)
