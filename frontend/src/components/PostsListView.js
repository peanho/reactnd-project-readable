import React from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import PostsContainer from '../containers/PostsContainer';
import CategoriesContainer from '../containers/CategoriesContainer';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: '20px'
  }
});

const PostListView = (props) => {
  const { category = 'ALL_CATEGORIES' } = props.match.params;
  const { classes } = props;
  return (
    <Grid container className={classes.root} spacing={16}>
      <Grid item xs={8}>
        <PostsContainer categoryFilter={category} />
      </Grid>
      <Grid item xs={4}>
        <CategoriesContainer selectedCategory={category} />
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(PostListView);
