import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'

import './global-styles/normalize.css'
import './global-styles/custom-styles.css'

import App from './app'
import store from './app/config'

function getApp () {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

ReactDOM.render(getApp(), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()
