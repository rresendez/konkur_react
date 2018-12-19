import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import blue from '@material-ui/core/colors/blue'
import Dropzone from 'react-dropzone'
import styled from 'styled-components'

const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600]
  }
}
const getColor = (props) => {
  if (props.isDragReject) {
    return '#c66'
  }
  if (props.isDragActive) {
    return '#6c6'
  }
  return '#ddd'
}

const Container = styled.div`
  width: 20rem
  height: 20rem
  min-width: 10rem
  min-height: 10rem
  border-width: 2px
  border-radius: 5px
  margin: 1rem
  border-color: #000
  border-style: dashed
  background-color: ${props => getColor(props)}
  `
const DialogContainer = styled.div`
  text-align: center;
`
const TitleContainer = styled.div`
  padding-top: 1rem;
`
const FileContainer = styled.div`
  padding-bottom: 1rem;
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
                      {isDragAccept ? 'Drop' : 'Drag'} files here... or click
                    </TitleContainer>
                  </Container>
                  <h4>Accepted files </h4>
                  <LabelContainer>
                    <h5>{this.props.name}</h5>
                  </LabelContainer>
                </div>
              )
            }}
          </Dropzone>
        </DialogContainer >
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

const SimpleDialogWrapped = withStyles(styles)(SimpleDialog)

export default SimpleDialogWrapped
