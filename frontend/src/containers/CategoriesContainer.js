import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions';
import { getCategories } from '../selectors';
import Categories from '../components/Categories';

class CategoriesContainer extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCategories());
  }

  render() {
    const { categories } = this.props;
    return (
      <Categories categories={categories} />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  categories: getCategories(state),
  selectedCategory: ownProps.selectedCategory
});

export default connect(mapStateToProps)(CategoriesContainer);
