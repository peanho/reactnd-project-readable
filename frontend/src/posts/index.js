import * as actions from './actions'
import * as selectors from './selectors'
import reducer from './reducer'

// XXX: should export unconnected components too ?
import PostList from './containers/PostListContainer'
import PostDetail from './containers/PostDetailContainer'

export { PostList, PostDetail, reducer, actions, selectors }
