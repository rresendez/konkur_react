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
    this.state.selectedVisibleTo = []
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

  render () {
    return (
      <CardDetail
        visibleToData={names}
        visibleToSelected={this.state.selectedVisibleTo}

        editorDefaultValue="/* Write your query right here :) */"
        dialogSwitch={this.state.dialogSwitch}
        dialogSaveSwitch={this.state.dialogSaveSwitch}

        handleRefEditor={this.handleRefEditor}

        handleOnCloseResultModal={this.handleOnCloseResultModal}
        handleOnSaveCard={this.handleOnSaveCard}
        handleBackCardColor={this.handleBackCardColor}
        handleNextCardColor={this.handleNextCardColor}
        handleSendQuery={this.handleSendQuery}
        handleOnCancelSaveCard={this.handleOnCancelSaveCard}
        handleOnConfirmSaveCard={this.handleOnConfirmSaveCard}
        handleOnChangeSelectedValues={this.handleOnChangeSelectedValues}
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
