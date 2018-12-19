import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import CardDetail from '../../components/CardDetail'

const names = [
  'Analyst, Replenishment',
  'Mgr, Replenishment Str Spprt',
  'Mgr, Direct Imp - Integration',
  'Mgr Replen, Soflines Develop.',
  'Sr Mgr, Replenishment',
  'Mgr, Replenishment'
]

class CardDetailContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.state.dialogSwitch = false
    this.state.dialogSaveSwitch = false
    this.state.howToSwitch = false
    this.state.selectedVisibleTo = []
    this.state.file = {
      buffer: null,
      name: ''
    }
    this.state.previousFile = {
      buffer: null,
      name: ''
    }
    this.state.columns = [
      {
        name: 'item_nbr',
        alias: 'item_nbr'
      },
      {
        name: 'dept_nbr',
        alias: ''
      },
      {
        name: 'cat_nbr',
        alias: ''
      }
    ]
    this.state.rows = [
      {
        item_nbr: 'adasd',
        cat_nbr: 'dsad'
      },
      {
        item_nbr: 'adasd'
      },
      {
        item_nbr: 'adasd'
      }
    ]
  }

  handleRefEditor = (refComponent) => {
    this.refEditor = refComponent
  }

  handleOnCloseResultModal = (event) => {
    console.log('holhandleOnCloseResultModal')
    this.setState(prevState => ({
      dialogSwitch: !prevState.dialogSwitch
    }))
  }

  handleOnSaveCard = (event) => {
    console.log('handleOnSaveCard')
    this.setState(prevState => ({
      dialogSaveSwitch: !prevState.dialogSaveSwitch
    }))
  }

  handleOnCancelSaveCard = (event) => {
    this.setState(prevState => ({
      dialogSaveSwitch: !prevState.dialogSaveSwitch
    }))
  }

  handleOnConfirmSaveCard = (event) => {
    this.props.history.push(`/`)
  }

  handleOnChangeSelectedValues = (event, child) => {
    console.log('handleOnChangeSelectedValues')
    console.log(event.target.value)
    this.setState({
      selectedVisibleTo: event.target.value
    })
  }

  handleBackCardColor = (event) => {
    console.log('handleBackCardColor')
  }

  handleNextCardColor = (event) => {
    console.log('handleNextCardColor')
  }

  handleSendQuery = (event) => {
    this.setState(prevState => ({
      dialogSwitch: !prevState.dialogSwitch
    }))
    console.log('handleSendQuery')
    console.log(this.refEditor.editor.getValue())
  }

  handleOnChangeTableArrangement = (columns) => {
    this.setState({
      columns: columns
    })
  }

  handleHowtoOpen = () => {
    this.setState({
      howToSwitch: true
    })
  }

  handleOnCloseDropzone = () => {
    this.setState({
      howToSwitch: false
    })
  }

  handleUploadDropzone = (file) => {
    this.setState((previousState) => ({
      file: {
        buffer: file,
        name: file.name
      },
      previousFile: {
        buffer: previousState.file.buffer,
        name: previousState.file.name
      }
    }))
  }

  handleCleanAttachment = () => {
    this.setState((previousState) => ({
      file: {
        buffer: previousState.previousFile.buffer,
        name: previousState.previousFile.name
      }
    }))
  }

  render () {
    return (
      <CardDetail
        visibleToData={names}
        visibleToSelected={this.state.selectedVisibleTo}
        columns={this.state.columns}
        rows={this.state.rows}

        editorDefaultValue="/* Write your query right here :) */"
        dialogSwitch={this.state.dialogSwitch}
        dialogSaveSwitch={this.state.dialogSaveSwitch}
        crud={this.props.crud}
        howToSwitch={this.state.howToSwitch}
        attachedName={this.state.file.name}

        handleRefEditor={this.handleRefEditor}

        handleOnCloseResultModal={this.handleOnCloseResultModal}
        handleOnSaveCard={this.handleOnSaveCard}
        handleBackCardColor={this.handleBackCardColor}
        handleNextCardColor={this.handleNextCardColor}
        handleSendQuery={this.handleSendQuery}
        handleOnCancelSaveCard={this.handleOnCancelSaveCard}
        handleOnConfirmSaveCard={this.handleOnConfirmSaveCard}
        handleOnChangeSelectedValues={this.handleOnChangeSelectedValues}
        handleOnChangeTableArrangement={this.handleOnChangeTableArrangement}
        handleHowtoOpen={this.handleHowtoOpen}
        handleOnCloseDropzone={this.handleOnCloseDropzone}
        handleUploadDropzone={this.handleUploadDropzone}
        handleCleanAttachment={this.handleCleanAttachment}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(CardDetailContainer)
