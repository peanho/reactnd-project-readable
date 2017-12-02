import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import PostsListView from '../components/PostsListView';
import PostDetailView from '../components/PostDetailView';


class App extends Component {

  render() {
    return (
      <div className="container-fluid">
        <Route path="/:category/:post_id" component={PostDetailView} />
        <Route exact path="/:category?" component={PostsListView} />
      </div>
    );
  }
}

export default connect()(App);
