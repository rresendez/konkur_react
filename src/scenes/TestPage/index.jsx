import React from 'react'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'

import DragnDrop from '../../components/DragnDrop'

class MockChange extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.state.name = 'empty'
    this.state.buffer = []
  }

  handleBuffer = (file) => {
    this.setState({
      buffer: file,
      name: file.name
    })
  }

  render () {
    return (
      <div>
        <DragnDrop
          name={this.state.name}
          handleUpload={this.handleBuffer}
          open
        >
        </DragnDrop>
      </div>
    )
  }
}

export default MockChange
