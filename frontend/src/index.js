import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import Root from './app/containers/Root'
import Modal from 'react-modal'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

Modal.setAppElement('#root')

ReactDOM.render(<Root />, document.getElementById('root'))
registerServiceWorker()
