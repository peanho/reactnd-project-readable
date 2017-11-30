import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Route, Switch } from 'react-router';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import PostsListView from '../components/PostsListView';
import PostDetailView from '../components/PostDetailView';

const styles = theme => ({
  root: {
    width: '100%'
  }
});

class App extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography type="title" color="inherit">
              Udacity's React Nanodegree - Readable App
            </Typography>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/:category/:post_id" component={PostDetailView} />
          <Route path="/:category?" component={PostsListView} />
        </Switch>
      </div>
    );
  }
}

export default compose(connect(), withStyles(styles))(App);
