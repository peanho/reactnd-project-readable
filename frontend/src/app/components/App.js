import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router'
import ReactModal from 'react-modal'
import { RootView, DetailView } from '../../views'

class App extends Component {

  render() {
    return (
      <div className="container-fluid">
        <Route path="/:category/:postId" component={DetailView} />
        <Route exact path="/:category?" component={RootView} />
      </div>
    );
  }
}

export default connect()(App);
