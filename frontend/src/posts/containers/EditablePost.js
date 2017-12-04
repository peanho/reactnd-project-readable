import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectors as categoriesSelector } from '../../categories'
import PostForm from '../components/PostForm'

class EditablePost extends Component {

  constructor(props) {
    super(props)
    const { post } = this.props
    this.state = post ? { ...post } : {}
  }

  handleEditTitle = event => {
    const title = event.target.value
    this.setState({
      title
    })
  }

  render() {
    const { post = {}, categories } = this.props;
    return <PostForm post={post} categories={categories} />
  }
}

const mapStateToProps = (state, ownProps) => {
  const categories = categoriesSelector.getAllIds(state)
  const { post } = ownProps
  return {
    categories,
    post
  }
}

export default connect(mapStateToProps)(EditablePost)
