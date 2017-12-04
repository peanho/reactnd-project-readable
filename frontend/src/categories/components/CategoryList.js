import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Link } from 'react-router-dom'
import { getAll } from '../selectors'
import { fetchCategories } from '../actions'

class CategoryList extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCategories());
  }

  render() {
    const { items } = this.props;
    return (
      <div className="card">
        <div className="card-header d-flex justify-content-around">
          <span>Categories</span>
          <Link to="/">Clear</Link>
        </div>
        <div className="card-body">
          <ul className="nav flex-column">
            {items.map((it, idx) => (
              <li key={idx} className="nav-item">
                <Link to={it.path} className="nav-link">{it.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  items: getAll
})

export default connect(mapStateToProps)(CategoryList);
