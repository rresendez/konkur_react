import {
  createSelector
} from 'reselect'

const cardBuilderReducerSelector = state => state.cardBuilderReducer.toJS()

export const cardBuilderCatalogsSelector = createSelector(
  cardBuilderReducerSelector,
  (cardBuilderReducer) => {
    return {
      scheduleCatalog: cardBuilderReducer.api.schedules,
      jobCatalog: cardBuilderReducer.api.jobs,
      priorityCatalog: cardBuilderReducer.api.priorities,
      cardComponentCatalog: cardBuilderReducer.api.cardComponents
    }
  }
)

export const cardBuilderSelectedSelector = createSelector(
  cardBuilderReducerSelector,
  (cardBuilderReducer) => {
    const selectedJobs = []
    cardBuilderReducer.api.selectedJobs.forEach((selectedJobIdx, idx) => {
      if (cardBuilderReducer.api.jobs[selectedJobIdx] !== undefined) {
        selectedJobs.push({
          ...cardBuilderReducer.api.jobs[selectedJobIdx],
          idx: selectedJobIdx
        })
      }
    })

    return {
      selectedSchedule: cardBuilderReducer.api.schedules[cardBuilderReducer.api.selectedSchedule] || { name: ' ' },
      selectedPriority: cardBuilderReducer.api.priorities[cardBuilderReducer.api.selectedPriority] || { name: ' ' },
      selectedJobs: selectedJobs.length > 0 ? selectedJobs : [{ name: '---' }],
      selectedCardComponent: cardBuilderReducer.api.selectedCardComponent
    }
  }
)

export const cardBuilderCardDetailSelector = createSelector(
  cardBuilderReducerSelector,
  cardBuilderCatalogsSelector,
  (cardBuilderReducer, cardBuilderCatalogsSelector) => {
    let cardComponentColor
    if (cardBuilderCatalogsSelector.cardComponentCatalog.length === 0) {
      cardComponentColor = null
    } else {
      cardComponentColor = cardBuilderCatalogsSelector.cardComponentCatalog[cardBuilderReducer.api.selectedCardComponent].color
    }
    let cardComponentCouldNotBeDeleted = true
    if (cardBuilderCatalogsSelector.cardComponentCatalog[cardBuilderReducer.api.selectedCardComponent]) {
      if (cardBuilderCatalogsSelector.cardComponentCatalog[cardBuilderReducer.api.selectedCardComponent].children === 0 || cardBuilderCatalogsSelector.cardComponentCatalog[cardBuilderReducer.api.selectedCardComponent].children === null) {
        cardComponentCouldNotBeDeleted = false
      }
    }
    return {
      cardSubComponent: cardBuilderReducer.api.cardSubComponent,
      cardTitle: cardBuilderReducer.api.cardTitle,
      cardDataLevel: cardBuilderReducer.api.cardDataLevel,
      cardComponentColor: cardComponentColor,
      cardComponentColorCouldNotBeSaved: cardBuilderReducer.api.cardComponentColorCouldNotBeSaved,
      cardLastCardComponentModified: cardBuilderReducer.api.cardLastCardComponentModified,
      cardFirstTimeChangedColor: cardBuilderReducer.api.cardFirstTimeChangedColor,
      cardComponentEditable: cardBuilderReducer.api.cardComponentEditable,
      cardLoading: cardBuilderReducer.api.cardLoading,
      cardStatus: cardBuilderReducer.api.cardStatus,
      cardComponentTitle: cardBuilderReducer.api.cardComponentTitle,
      cardComponentCouldNotBeDeleted: cardComponentCouldNotBeDeleted,
      isUpdate: cardBuilderReducer.api.isUpdate
    }
  }
)

export const cardBuilderCardSelector = createSelector(
  cardBuilderReducerSelector,
  (cardBuilderReducerSelector) => {
    return {
      defaultValue: cardBuilderReducerSelector.api.cardTableSwitch
    }
  }
)

export const cardBuilderSwitchesSelector = createSelector(
  cardBuilderReducerSelector,
  (cardBuilderReducerSelector) => {
    return {
      cardTableSwitch: cardBuilderReducerSelector.api.cardTableSwitch,
      cardSaveModalSwitch: cardBuilderReducerSelector.api.cardSaveModalSwitch,
      loading: cardBuilderReducerSelector.api.loading
    }
  }
)

export const cardBuilderTableSelector = createSelector(
  cardBuilderReducerSelector,
  (cardBuilderReducerSelector) => {
    return {
      columns: cardBuilderReducerSelector.api.cardSchema,
      rows: cardBuilderReducerSelector.api.cardRows
    }
  }
)
