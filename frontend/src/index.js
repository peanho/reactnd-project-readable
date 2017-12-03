import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import Root from './app/containers/Root'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

ReactDOM.render(<Root />, document.getElementById('root'))
registerServiceWorker();
