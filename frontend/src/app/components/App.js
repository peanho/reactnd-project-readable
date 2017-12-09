import React from 'react'
import { Route, Switch } from 'react-router'
import { RootView, DetailView, EditPostView } from '../../views'

const App = () => {
  return (
    <div className="container-fluid">
      <Switch>
        <Route path="/posts-new" component={EditPostView} />
        <Route path="/posts-edit/:postId" component={EditPostView} />
        <Route path="/comments-new" render={() => <div>ADD COMMENT</div>} />
        <Route path="/comments-edit/:commentId" render={() => <div>EDIT COMMENT</div>} />
        <Route path="/:category/:postId" component={DetailView} />
        <Route path="/:category?" component={RootView} />
      </Switch>
    </div>
  );
}

export default App;
