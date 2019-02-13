import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NotificationContainer from '../containers/NotificationContainer'
import _axios from '../apiClient'

import routes from '../routes'
import styles from './styles.module.css'

const InterceptorHOC = (props) => {
  _axios.interceptors.response.use(
    async (response) => {
    return response
    },
    async (error) => {
      if (error.response.status === 404) {
        if (props.location.pathname.includes('not-found')) {
          props.history.replace(props.location.pathname)
        } else {
          props.history.push(`${props.location.pathname}/not-found`)
        }
      }
      throw (error)
    }
  )
  return null
}

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className={styles.appRoot}>
          <Route component={InterceptorHOC} />
          <Switch>
            {routes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
          </Switch>
          <NotificationContainer />
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
