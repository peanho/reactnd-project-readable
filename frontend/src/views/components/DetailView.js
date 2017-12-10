import React from 'react'
import { Route, Link } from 'react-router-dom'
import { PostDetail } from '../../posts'
import EditCommentView from './EditCommentView'

const DetailView = props => {
  const { match } = props
  const { postId } = match.params
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
          <PostDetail id={postId} url={match.url}>
            <Route path={`${match.path}/comments-new`} component={EditCommentView} />
            <Route path={ `${match.path}/comments-edit/:commentId`} component={EditCommentView} />
          </PostDetail>
        </div>
      </div>
    </div>
  )
}

export default DetailView
