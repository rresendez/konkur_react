import React from 'react'
import PropTypes from 'prop-types'
import Dropzone from 'react-dropzone'
import styled from 'styled-components'

import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import { Fab } from '@material-ui/core'

import Icon from '../Icon'

const getColor = (props) => {
  if (props.isDragReject) {
    return '#c66'
  }
  if (props.isDragActive) {
    return '#c6f68d'
  }
  return 'rgba(255,255,255,1)'
}

const getBorderColor = (props) => {
  if (props.isDragReject) {
    return 'red'
  }
  if (props.isDragActive) {
    return '#09af00'
  }
  return 'rgba(1,1,1,1)'
}

const Container = styled.div`
  width: 100%;
  height: 15rem;
  border-width: 0.125rem;
  border-radius: 0.3125rem;
  border-color: ${props => getBorderColor(props)};
  border-style: dashed;
  box-sizing: border-box;
  background-color: ${props => getColor(props)};
  cursor: pointer;
  margin-bottom: 1rem;
  `
const DialogContainer = styled.div`
  text-align: center;
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
`
const TitleContainer = styled.div`
  padding: 1rem;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SaveButtonWrapper = styled.div`
  width: 100%;
  margin 1rem 0;
  text-align: center;
`
const LabelContainer = styled.div`
  text-align:center;
`

class SimpleDialog extends React.Component {
  constructor (props) {
    super(props)
    this.dropzoneRef = React.createRef()
  }

  onDrop = (accepted) => {
    if (accepted.length > 0) {
      this.props.handleUpload(accepted[0])
    }
  }

  render () {
    const { classes, onClose, selectedValue, ...other } = this.props

    return (
      <Dialog onClose={this.props.handleOnClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogContainer>
          <DialogTitle>Upload a file to attach</DialogTitle>
          <Dropzone
            ref={this.dropzoneRef}
            onDrop={this.onDrop}
            multiple={false}
          >
            {({ getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject }) => {
              return (
                <div>
                  <Container
                    isDragActive={isDragActive}
                    isDragReject={isDragReject}
                    onClick={() => this.dropzoneRef.current.open()}
                    {...getRootProps()}
                  >
                    <input {...getInputProps()} />
                    <TitleContainer>
                      <Icon size="4" color="black">backup</Icon>
                    </TitleContainer>
                  </Container>
                  <div>Accepted file</div>
                  <LabelContainer>
                    <div>{this.props.name}</div>
                  </LabelContainer>
                </div>
              )
            }}
          </Dropzone>
        </DialogContainer >
        <SaveButtonWrapper>
          <Fab onClick={this.props.handleSaveAttachment} color="primary">
            <Icon size="2" color="white">save</Icon>
          </Fab>
        </SaveButtonWrapper>
      </Dialog>
    )
  }
}

SimpleDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
  name: PropTypes.string.isRequired,
  buffer: PropTypes.array.isRequired,
  handleBuffer: PropTypes.func.isRequired
}

export default SimpleDialog
