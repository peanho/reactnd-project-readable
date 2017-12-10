import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link, Redirect } from 'react-router-dom'
import { 
  PostDetail,
  actions as postActions
} from '../../posts'
import EditCommentView from './EditCommentView'

class DetailView extends Component {

  componentDidMount() {
    const { dispatch, postId } = this.props
    dispatch(postActions.loadIfNeeded(postId))
  }

  render() {
    const { isLoading, post, match } = this.props
    if (isLoading) {
      return (<div className="alert alert-info">Loading...</div>)
    } else if (!isLoading && post == null) {
      return (<Redirect to="/" />)
    }
    return (
      <div>
        <nav className="navbar navbar-light bg-light mb-2">
          <ul className="navbar-nav mr-auto mt-lg-0">
            <li className="nav-item">
              <Link to="/">
                Go back to list
              </Link>
            </li>
          </ul>
          <Link to={`${match.url}/comments-new`} className="btn btn-primary">
            ADD COMMENT
          </Link>
        </nav>
        <div className="row">
          <div className="col">
            <PostDetail post={post}>
              <Route path={`${match.path}/comments-new`} component={EditCommentView} />
              <Route path={`${match.path}/comments-edit/:commentId`} component={EditCommentView} />
            </PostDetail>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { postId } = ownProps.match.params
  const { detail } = state.views
  const post = state.posts.byId[postId]
  const { isLoading } = post ? { isLoading: false } : (detail.post || { isLoading: true })
  return {
    isLoading,
    postId,
    post
  }
}

export default connect(mapStateToProps)(DetailView)
