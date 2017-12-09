import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PostDetail } from '../../posts'
import { Link } from 'react-router-dom'

class DetailView extends Component {

  render() {
    const { url, postId } = this.props
    return (
      <div>
        <nav className="navbar navbar-light bg-light mb-2">
          <ul className="navbar-nav mr-auto mt-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">Go back to list</Link>
            </li>
          </ul>
          <Link to={`${url}/comments-new`} className="btn btn-primary">
            ADD COMMENT
          </Link>
        </nav>
        <div className="row">
          <div className="col">
            <PostDetail id={postId} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { url } = ownProps.match
  const { postId } = ownProps.match.params
  return {
    url,
    postId
  }
}

export default connect(mapStateToProps)(DetailView)
