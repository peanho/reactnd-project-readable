import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import configureStore from '../configureStore';
import App from './App';

const store = configureStore();
const theme = createMuiTheme();

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <MuiThemeProvider theme={theme}>
            <Route component={App} />
          </MuiThemeProvider>
        </Router>
      </Provider>
    );
  }
}

export default Root;
