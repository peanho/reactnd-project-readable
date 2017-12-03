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
          {items.map((it, idx) => (
            <Link key={idx} to={it.path} className="btn btn-default">{it.name}</Link>
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  items: getAll
})

export default connect(mapStateToProps)(CategoryList);
