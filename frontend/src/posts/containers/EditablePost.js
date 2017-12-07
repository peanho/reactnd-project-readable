import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectors as categoriesSelector } from '../../categories'
import { create } from '../actions'

class EditablePost extends Component {

  constructor(props) {
    super(props)
    const { post } = this.props
    this.state = post ? { ...post } : {
      title: '',
      body: '',
      author: '',
      category: ''
    }
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
    const { dispatch, onSubmitCallback } = this.props
    const post = {
      ...this.state,
      timestamp: Date.now()
    }
    dispatch(create(post))
    onSubmitCallback();
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
  const categories = categoriesSelector.getAllIds(state)
  const { post, onSubmitCallback } = ownProps;
  return {
    categories,
    post,
    onSubmitCallback
  }
}

export default connect(mapStateToProps)(EditablePost)
