import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactModal from 'react-modal'
import { PostList, EditablePost } from '../../posts'
import CategoryList from '../../categories'

ReactModal.setAppElement('#root')

class RootView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
    }
  }

  handleAdd = event => {
    event.preventDefault()
    this.setState( { isEditing: true } )
  }

  handleClose = () => {
    this.setState( { isEditing: false } )
  }

  render() {
    const { selectedCategory } = this.props;
    return (
      <div>
        <nav className="navbar navbar-light bg-light mb-2">
          <span className="navbar-brand">Posts</span>
          <button type="button" onClick={this.handleAdd} className="btn btn-primary">ADD</button>
        </nav>
        <div className="row">
          <div className="col-10">
            <PostList categoryFilter={selectedCategory} />
          </div>
          <div className="col">
            <CategoryList selectedCategory={selectedCategory} />
          </div>
        </div>
        <ReactModal isOpen={this.state.isEditing} onRequestClose={this.handleClose}>
          <EditablePost onSubmitCallback={this.handleClose} />
        </ReactModal>1
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { category } = ownProps.match.params;
  return {
    selectedCategory: category
  }
}

export default connect(mapStateToProps)(RootView)