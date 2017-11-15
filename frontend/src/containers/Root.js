import React, { Component } from 'react';
// import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';

class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={App} />
      </BrowserRouter>
    );
  }
}

export default Root;
