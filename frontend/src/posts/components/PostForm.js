import React from 'react'

const PostForm = props => {
  const { categories, handlers, onSubmit } = props
  const { title, body, author, category } = handlers
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          className="form-control"
          value={title.value}
          onChange={title.onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Body</label>
        <textarea
          id="content"
          className="form-control"
          rows="5"
          value={body.value}
          onChange={body.onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <input
          id="author"
          type="text"
          className="form-control"
          value={author.value}
          onChange={this.handleChangeAuthor}
        />
      </div>
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          className="form-control"
          value={category.value}
          onChange={this.handleChangeCategory}
        >
          {categories.map(id => (
            <option key={id} value={id}>{id}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-success">Save</button>
      </div>
    </form>
  )
}

export default PostForm;
