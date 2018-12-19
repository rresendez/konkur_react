import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as eRActions from '../../reducers/errorReducer/actions'

import Notification from '../../components/Notification'

class NotificationContainer extends React.Component {
  handleOnCloseButton = () => {
    this.props.sagaCleanError({ handler: this.handleCleanError })
  }

  handleCleanError = () => {
    const id = setTimeout(() => {
      this.props.sagaCleanMessage(id)
    }, 6001)
  }

  handleOnCloseSnackbar = () => {
    // sd
  }

  render () {
    return (
      <Notification
        open={this.props.error.error}
        message={this.props.error.message}
        handleOnCloseSnackbar={this.handleOnCloseSnackbar}
        handleOnCloseButton={this.handleOnCloseButton}
      />
    )
  }
}

function mapStateToProps (state) {
  return {
    ...state.errorReducer.toJS()
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    ...eRActions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationContainer)
