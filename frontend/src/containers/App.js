import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';
import PostsListView from '../components/PostsListView';
import PostDetailView from '../components/PostDetailView';
import logo from '../logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <Switch>
            <Route path="/:category/:postId" component={PostDetailView} />
            />
            <Route path="/:category?" component={PostsListView} />
            {/* <Route path="/:category?" component={SorterablePostList} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default connect()(App);
