import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import routes from '../routes'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
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
