import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import CardDetail from '../../components/CardDetail'

class CardDetailContainer extends React.Component {
  handleRefEditor = (refComponent) => {
    this.refEditor = refComponent
  }

  handleOnCloseResultModal = (event) => {
    console.log('holhandleOnCloseResultModal')
  }

  handleOnSaveCard = (event) => {
    console.log('handleOnSaveCard')
  }

  handleBackCardColor = (event) => {
    console.log('handleBackCardColor')
  }

  handleNextCardColor = (event) => {
    console.log('handleNextCardColor')
  }

  handleSendQuery = (event) => {
    console.log('handleSendQuery')
    console.log(this.refEditor)
    debugger
  }

  render () {
    return (
      <CardDetail
        visibleToData={[]}
        editorDefaultValue="/* Write your query right here :) */"

        handleRefEditor={this.handleRefEditor}

        handleOnCloseResultModal={this.handleOnCloseResultModal}
        handleOnSaveCard={this.handleOnSaveCard}
        handleBackCardColor={this.handleBackCardColor}
        handleNextCardColor={this.handleNextCardColor}
        handleSendQuery={this.handleSendQuery}
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
