import React from 'react'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'

class MockChange extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.switch = false
  }

  render () {
    return (
      <div>
        <div>
          <button onClick={() => { this.setState({ switch: !this.state.switch }) }} >
            Open
          </button>
        </div>
        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          maxWidth={false}
          fullScreen
          open={this.state.switch}

          aria-labelledby="confirmation-dialog-title"
        >
          <DialogTitle id="confirmation-dialog-title">Save this card</DialogTitle>
          <DialogContent>
            Do you want to save this card?
          </DialogContent>
          <DialogActions>
            <button onClick={() => { this.setState({ switch: !this.state.switch }) }} >
              Close
            </button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default MockChange
