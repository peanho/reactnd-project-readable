import React, { Component } from 'react'

class PostForm extends Component {

  render() {
    const { categories } = this.props;
    return (
      <form>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input id="title" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="content">Body</label>
          <textarea id="content" className="form-control" rows="5"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input id="author" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select className="form-control" id="category">
            {categories.map(id => (
              <option key={id} value={id}>{id}</option>
            ))}
          </select>
        </div>
      </form>
    )
  }
}

export default PostForm;
