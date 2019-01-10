import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as eRActions from '../../reducers/errorReducer/actions'
import * as cRActions from '../../reducers/cardBuilderReducer/actions'

import CardDetail from '../../components/CardDetail'

import {
  cardBuilderCatalogsSelector, cardBuilderSelectedSelector,
  cardBuilderCardDetailSelector
} from './selectors'

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
    const cardComponentCatalog = this.props.cardComponentCatalog
    const selectedCardComponent = this.props.card
    debugger
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

  handleOnChangeCardSubComponent = (event) => {
    this.props.changeCardSubComponent(event.target.value)
  }

  handleOnChangeCardTitle = (event) => {
    this.props.changeCardTitle(event.target.value)
  }

  handleOnChangeCardDataLevel = (event) => {
    this.props.changeCardDataLevel(event.target.value)
  }

  handleOnChangeCardComponent = (idx) => {
    this.props.changeSelectedCardComponent(idx)
  }

  handleOnChangeCardComponentColor = (color) => {
    this.props.sagaChangeCardComponentColor({
      ...color,
      cardComponentCatalog: this.props.cardComponentCatalog,
      cardFirstTimeChangedColor: this.props.cardDetail.cardFirstTimeChangedColor
    })
  }

  handleOnCloseEditableCardItem = (event) => {
    this.props.sagaCancelCardComponentModification({
      cardLastCardComponentModified: this.props.cardDetail.cardLastCardComponentModified
    })
  }

  handleOnChangeCardItemEditable = (status) => {
    this.props.changeCardEditable(status)
  }

  handleOnSaveCardComponent = (newCardComponent) => {
    const payload = {
      currentCardComponentSelectedIdx: this.props.selectedCardComponent,
      currentCardComponentSelected: this.props.cardComponentCatalog[this.props.selectedCardComponent],
      cardLastCardComponentModified: this.props.cardDetail.cardLastCardComponentModified,
      newCardComponent
    }
    this.props.sagaCreateCardComponent(payload)
  }

  handleOnChangedCardComponentTitle = (title) => {
    this.props.changeCardComponentNewTitle(title)
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
        handleOnChangeCardComponent={this.handleOnChangeCardComponent}
        handleOnChangeCardComponentColor={this.handleOnChangeCardComponentColor}
        cardComponentColor={this.props.cardDetail.cardComponentColor}
        cardComponentColorCouldNotBeSaved={this.props.cardDetail.cardComponentColorCouldNotBeSaved}
        handleOnCloseEditableCardItem={this.handleOnCloseEditableCardItem}
        cardComponentEditable={this.props.cardDetail.cardComponentEditable}
        handleOnChangeCardItemEditable={this.handleOnChangeCardItemEditable}
        handleOnSaveCardComponent={this.handleOnSaveCardComponent}
        cardComponentTitle={this.props.cardDetail.cardComponentTitle}
        handleOnChangedCardComponentTitle={this.handleOnChangedCardComponentTitle}

        columns={this.state.columns}
        rows={this.state.rows}

        cardSubComponent={this.props.cardDetail.cardSubComponent}
        handleOnChangeCardSubComponent={this.handleOnChangeCardSubComponent}

        cardTitle={this.props.cardDetail.cardTitle}
        handleOnChangeCardTitle={this.handleOnChangeCardTitle}

        cardDataLevel={this.props.cardDetail.cardDataLevel}
        handleOnChangeCardDataLevel={this.handleOnChangeCardDataLevel}

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
        handleOnChangeTableArrangement={this.handleOnChangeTableArrangement}
        handleHowtoOpen={this.handleHowtoOpen}
        handleOnCloseDropzone={this.handleOnCloseDropzone}
        handleUploadDropzone={this.handleUploadDropzone}
        handleCleanAttachment={this.handleCleanAttachment}
        handleSaveAttachment={this.handleSaveAttachment}
        cardStatus={this.props.cardDetail.cardStatus}
        cardLoading={this.props.cardDetail.cardLoading}
      />
    )
  }
}

function mapStateToProps (state) {
  return {
    ...cardBuilderCatalogsSelector(state),
    ...cardBuilderSelectedSelector(state),
    cardDetail: cardBuilderCardDetailSelector(state)
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    ...eRActions,
    ...cRActions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CardDetailContainer)
