import React from 'react'
import PropTypes from 'prop-types'
import Dropzone from 'react-dropzone'
import styled from 'styled-components'

import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import LinearProgress from '@material-ui/core/LinearProgress'

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
  padding: 1rem;
  transition: width .3s ease;
  position: relative;
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
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
  box-sizing: border-box;
  transition: width .3s ease;
`
const LabelContainer = styled.div`
  margin-top: .5rem;
  text-align: center;
`
const LoadingContainer = styled.div`
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  z-index: 20;
  background-color: rgba(254,254,254,.8);
  box-sizing: border-box;
  padding: 1rem;
  transition: background-color .3s ease;
`

const LinearContainer = styled.div`
  margin-top: 5rem;
  flex-grow: 1;
`

class SimpleDialog extends React.Component {
  constructor (props) {
    super(props)
    this.dropzoneRef = React.createRef()
    this.state = {}
    this.state.percentUploading = 0
  }

  onDrop = (accepted) => {
    if (accepted.length > 0) {
      this.props.handleUpload(accepted[0])
    }
  }

  handleOnPercentUploadingChange = (value) => {
    this.setState({
      percentUploading: value
    })
  }

  handleSaveAttachment = (event) => {
    this.props.handleSaveAttachment(event, this.handleOnPercentUploadingChange)
  }

  handleOnClose = (event) => {
    if (!this.props.loading) {
      this.props.handleOnClose(event)
    }
  }

  renderLoading = () => {
    if (this.props.loading) {
      return (
        <LoadingContainer>
          <LinearContainer>
            <LinearProgress
              variant="buffer"
              value={this.state.percentUploading}
              valueBuffer={this.state.percentUploading}
            />
          </LinearContainer>
        </LoadingContainer>
      )
    }
    return null
  }

  render () {
    const { classes, onClose, selectedValue, ...other } = this.props

    return (
      <Dialog
        onClose={this.handleOnClose}
        aria-labelledby="simple-dialog-title"
        {...other}
      >
        <DialogContainer>
          <DialogTitle>Upload a file to attach</DialogTitle>
          <Dropzone
            ref={this.dropzoneRef}
            onDrop={this.onDrop}
            multiple={false}
            disabled={this.props.loading}
          >
            {
              ({ getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject }) => {
                return (
                  <div>
                    <Container
                      isDragActive={isDragActive}
                      isDragReject={isDragReject}
                      {...getRootProps()}
                    >
                      <input {...getInputProps()} />
                      <TitleContainer>
                        <Icon size="4" color="rgba(26,117,207,1)">backup</Icon>
                      </TitleContainer>
                      {this.renderLoading()}
                    </Container>
                    <LabelContainer>
                      <div>{this.props.name}</div>
                    </LabelContainer>
                  </div>
                )
              }
            }
          </Dropzone>
        </DialogContainer >
        {
          this.props.name !== '' && (
            <SaveButtonWrapper>
              <Button
                disabled={this.props.loading}
                onClick={this.handleSaveAttachment}
                color="primary"
              >
                save file
              </Button>
            </SaveButtonWrapper>
          )
        }
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
  handleBuffer: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
}

export default SimpleDialog
