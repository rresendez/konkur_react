import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as eRActions from '../../reducers/errorReducer/actions'
import * as cRActions from '../../reducers/cardBuilderReducer/actions'

import CardDetail from '../../components/CardDetail'

import { cardBuilderCatalogsSelector, cardBuilderSelectedSelector } from './selectors'

class CardDetailContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.state.dialogSwitch = false
    this.state.dialogSaveSwitch = false
    this.state.howToSwitch = false
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

  componentWillMount () {
    this.props.sagaInitCardBuilder()
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
    debugger
    this.props.changeSelectedJobs()
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

  handleSaveAttachment = () => {
    this.setState({
      howToSwitch: false
    })
    this.props.sagaSetError({
      error: true,
      message: 'saved attachment :)'
    })
  }

  handleOnChangeSchedule = (event, child) => {
    const selectedScheduleIndex = this.props.scheduleCatalog.findIndex(
      (schedule) => schedule.id === child.props['data-item-id']
    )
    if (selectedScheduleIndex !== -1) {
      this.props.changeSelectedSchedule(selectedScheduleIndex)
    }
  }

  handleOnChangePriority = (event, child) => {
    const selectedPriorityIndex = this.props.priorityCatalog.findIndex(
      (priority) => priority.id === child.props['data-item-id']
    )
    if (selectedPriorityIndex !== -1) {
      this.props.changeSelectedPriority(selectedPriorityIndex)
    }
  }

  handleOnChangeJobs = (event, child) => {
    const selection = event.target.value[event.target.value.length - 1]
    const isInSelectedArray = this.props.selectedJobs.findIndex((job) => job.name === selection)
    const selectionIndex = this.props.jobCatalog.findIndex((job) => job.name === selection)
    if (isInSelectedArray !== -1) {
      const firstPart = this.props.selectedJobs.slice(0, isInSelectedArray)
      const lastPart = this.props.selectedJobs.slice(isInSelectedArray + 1, this.props.selectedJobs.length)
      const prePayload = [...firstPart, ...lastPart]
      const payload = prePayload.map((item) => item.idx)
      this.props.changeSelectedJobs(payload)
    } else {
      let payload = []
      if (this.props.selectedJobs[0].name === '---') {
        payload = payload.concat([selectionIndex])
      } else {
        payload = this.props.selectedJobs.map((item) => item.idx).concat([selectionIndex])
      }
      this.props.changeSelectedJobs(payload)
    }
  }

  render () {
    return (
      <CardDetail
        isCallinProgress={this.props.isCallinProgress}

        schedules={this.props.scheduleCatalog}
        selectedSchedule={this.props.selectedSchedule}
        handleOnChangeSchedule={this.handleOnChangeSchedule}

        priorities={this.props.priorityCatalog}
        selectedPriority={this.props.selectedPriority}
        handleOnChangePriority={this.handleOnChangePriority}

        jobs={this.props.jobCatalog}
        selectedJobs={this.props.selectedJobs}
        handleOnChangeJobs={this.handleOnChangeJobs}

        cardComponents={this.props.cardComponentCatalog}
        selectedCardComponent={this.props.selectedCardComponent}
        handleOnChangeCardComponent={() => {}}

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
        handleSaveAttachment={this.handleSaveAttachment}
      />
    )
  }
}

function mapStateToProps (state) {
  return {
    ...cardBuilderCatalogsSelector(state),
    ...cardBuilderSelectedSelector(state)
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    ...eRActions,
    ...cRActions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CardDetailContainer)
