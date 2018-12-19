import React from 'react'
import PropTypes from 'prop-types'

import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'

import Icon from '../Icon'

class Notification extends React.Component {
  render () {
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={this.props.open}
        autoHideDuration={6000}
        onClose={this.props.handleOnCloseSnackbar}
        ContentProps={{
          'aria-describedby': 'message-id'
        }}
        message={<span id="message-id">{this.props.message}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={this.props.handleOnCloseButton}
          >
            <Icon color="white" size="1.5">clear</Icon>
          </IconButton>
        ]}
      />
    )
  }
}

export default Notification
