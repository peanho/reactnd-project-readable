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
        <div className="card-header">
          Categories
        </div>
        <div className="card-body">
          <ul class="nav flex-column">
            {items.map((it, idx) => (
              <li className="nav-item">
                <Link key={idx} to={it.path} className="nav-link">{it.name}</Link>
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
