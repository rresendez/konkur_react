import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import ErrorNotificationContainer from '../containers/ErrorNotificationContainer'

import routes from '../routes'
import styles from './styles.module.css'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className={styles.appRoot}>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
          <ErrorNotificationContainer />
        </div>
      </BrowserRouter>
    )
  }
}

function mapStateToProps (state) {
  return {
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
