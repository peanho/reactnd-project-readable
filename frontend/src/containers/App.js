import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Switch, Route } from 'react-router';
import { fetchPosts } from '../actions';
import logo from '../logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPosts());
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

App.propTypes = {
  posts: PropTypes.shape({
    byId: PropTypes.object.isRequired,
    allIds: PropTypes.array.isRequired
  }),
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { posts } = state;
  const items = posts.allIds.map( id => posts.byId[id]);
  return {
    items
  }
}

export default connect(mapStateToProps)(App);
