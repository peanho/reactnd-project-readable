import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import configureStore from '../configureStore';
import App from '../components/App';

const store = configureStore();

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route component={App} />
        </Router>
      </Provider>
    );
  }
}

export default Root;
