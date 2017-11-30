import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import PostDetailContainer from '../containers/PostDetailContainer';

const styles = theme => ({
  root: {
    // marginTop: theme.spacing.unit * 3,
    width: '100%'
  }
});

const PostDetailView = props => {
  const { classes } = props;
  const { post_id: postId } = props.match.params;
  return (
    <div className={classes.root}>
      
      <PostDetailContainer postId={postId} />
    </div>
  );
};

export default withStyles(styles)(PostDetailView);
