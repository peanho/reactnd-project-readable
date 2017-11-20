import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';
import { fetchPosts } from '../actions';
import SorterablePostList from './SorterablePostList';
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
        <div className="App-intro">
          <Switch>
            <Route path="/:category/:postId" render={ ({ match }) => (
              <div>
                <h3>category: {match.params.category}</h3>
                <h3>post id: {match.params.postId}</h3>
              </div>
            )}
            />
            <Route path="/:category?" component={SorterablePostList} />
          </Switch>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(App);
