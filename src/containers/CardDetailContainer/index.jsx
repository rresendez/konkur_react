import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as eRActions from '../../reducers/errorReducer/actions'
import * as cRActions from '../../reducers/cardBuilderReducer/actions'

import CardDetail from '../../components/CardDetail'

import {
  cardBuilderCatalogsSelector, cardBuilderSelectedSelector,
  cardBuilderCardDetailSelector, cardBuilderSwitchesSelector
} from './selectors'

class CardDetailContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
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
    const statementValue = this.refEditor.editor.getValue()
    const cardComponentCatalog = this.props.cardComponentCatalog
    const selectedCardComponent = this.props.selectedCardComponent
    const selectedJobs = this.props.selectedJobs
    const selectedPriority = this.props.selectedPriority
    const selectedSchedule = this.props.selectedSchedule
    const cardTitle = this.props.cardDetail.cardTitle
    const cardSubComponent = this.props.cardDetail.cardSubComponent
    const cardDataLevel = this.props.cardDetail.cardDataLevel
    const payload = {
      selectedCardComponent: cardComponentCatalog[selectedCardComponent],
      selectedJobs,
      selectedPriority,
      selectedSchedule,
      statementValue,
      cardTitle,
      cardSubComponent,
      cardDataLevel
    }
    this.props.sagaValidateCard(payload)
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
    const selectedCardComponent = this.props.selectedCardComponent
    const cardComponentCatalog = this.props.cardComponentCatalog
    if (this.props.selectedCardComponent === this.props.cardComponentCatalog.length - 2 ||
        this.props.selectedCardComponent === this.props.cardComponentCatalog.length - 1) {
      this.props.changeCardComponentEditableForNew(status)
    } else {
      this.props.changedCardEditableUpdate(status)
    }
  }

  handleOnSaveCardComponent = (newCardComponent) => {
    const payload = {
      currentCardComponentSelectedIdx: this.props.selectedCardComponent,
      currentCardComponentSelected: this.props.cardComponentCatalog[this.props.selectedCardComponent],
      cardLastCardComponentModified: this.props.cardDetail.cardLastCardComponentModified,
      newCardComponent
    }
    if (this.props.cardDetail.isUpdate) {
      this.props.sagaUpdateCardComponent(payload)
    } else {
      this.props.sagaCreateCardComponent(payload)
    }
  }

  handleOnChangedCardComponentTitle = (title) => {
    this.props.changeCardComponentNewTitle(title)
  }

  handleOnDeleteCardComponent = () => {
    const selectedCardComponent = this.props.selectedCardComponent
    const cardComponentCatalog = this.props.cardComponentCatalog
    const cardComponentToDelete = cardComponentCatalog[selectedCardComponent]
    const payload = {
      cardComponentToDelete
    }
    this.props.sagaDeleteCardComponent(payload)
  }

  render () {
    return (
      <CardDetail
        loading={this.props.switches.loading}
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
        cardComponentCouldNotBeDeleted={this.props.cardDetail.cardComponentCouldNotBeDeleted}

        columns={this.state.columns}
        rows={this.state.rows}

        cardSubComponent={this.props.cardDetail.cardSubComponent}
        handleOnChangeCardSubComponent={this.handleOnChangeCardSubComponent}

        cardTitle={this.props.cardDetail.cardTitle}
        handleOnChangeCardTitle={this.handleOnChangeCardTitle}

        cardDataLevel={this.props.cardDetail.cardDataLevel}
        handleOnChangeCardDataLevel={this.handleOnChangeCardDataLevel}

        editorDefaultValue="/* Write your query right here :) */"
        dialogSwitch={this.props.switches.cardTableSwitch}
        dialogSaveSwitch={this.props.switches.cardSaveModalSwitch}
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
        handleOnDeleteCardComponent={this.handleOnDeleteCardComponent}
      />
    )
  }
}

function mapStateToProps (state) {
  return {
    ...cardBuilderCatalogsSelector(state),
    ...cardBuilderSelectedSelector(state),
    cardDetail: cardBuilderCardDetailSelector(state),
    switches: cardBuilderSwitchesSelector(state)
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    ...eRActions,
    ...cRActions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CardDetailContainer)
