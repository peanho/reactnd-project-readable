import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, sortPosts, sendVote } from '../actions';
import { getVisiblePosts } from '../selectors';
import Posts from '../components/Posts';

class CommentListContainer extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCommentsIfNeeded(postId));
  }

  render() {
    
  }
}
