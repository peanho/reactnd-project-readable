import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import PostsListView from '../components/PostsListView';
import PostDetailView from '../components/PostDetailView';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Route exact path="/:category?" component={PostsListView} />
        <Route path="/:category/:post_id" component={PostDetailView} />
      </div>
    );
  }
}

export default connect()(App);
