import {
  fromJS
} from 'immutable'

import * as actions from './actions'

const initialState = fromJS({
  api: {

    jobs: [],
    schedules: [],
    priorities: [],
    cardComponents: [],
    selectedJobs: [],

    selectedCardComponent: 0,
    selectedPriority: 0,
    selectedSchedule: 0,

    cardSubComponent: '',
    cardTitle: '',
    cardDataLevel: '',
    cardItemsCount: 0,
    cardLastUpdateDate: '',

    cardLastCardComponentModified: {},
    cardFirstTimeChangedColor: false,
    cardComponentColorCouldNotBeSaved: false,
    cardComponentEditable: false
  },
  isCallInProgress: false,
  error: false,
  message: ''
})

export default function initReducer (state = initialState, action) {
  if (action.type === actions.CHANGE_IS_CALL_IN_PROGRESS) {
    return state.setIn(['isCallInProgress'], action.payload)
  }

  if (action.type === actions.SAVE_CATALOGS) {
    return state
      .setIn(['api', 'jobs'], fromJS(action.payload.api.jobs))
      .setIn(['api', 'schedules'], fromJS(action.payload.api.schedules))
      .setIn(['api', 'priorities'], fromJS(action.payload.api.priorities))
      .setIn(['api', 'cardComponents'], fromJS(action.payload.api.cardComponents))
      .setIn(['isCallInProgress'], fromJS(action.payload.isCallInProgress))
  }

  if (action.type === actions.CHANGE_SELECTED_SCHEDULE) {
    return state.setIn(['api', 'selectedSchedule'], action.payload)
  }

  if (action.type === actions.CHANGE_SELECTED_PRIORITY) {
    return state.setIn(['api', 'selectedPriority'], action.payload)
  }

  if (action.type === actions.CHANGE_SELECTED_JOBS) {
    return state.setIn(['api', 'selectedJobs'], fromJS(action.payload))
  }

  if (action.type === actions.CHANGE_CARD_SUB_COMPONENT) {
    return state.setIn(['api', 'cardSubComponent'], fromJS(action.payload))
  }

  if (action.type === actions.CHANGE_CARD_TITLE) {
    return state.setIn(['api', 'cardTitle'], fromJS(action.payload))
  }

  if (action.type === actions.CHANGE_CARD_DATA_LEVEL) {
    return state.setIn(['api', 'cardDataLevel'], fromJS(action.payload))
  }

  if (action.type === actions.CHANGE_SELECTED_CARD_COMPONENT) {
    return state.setIn(['api', 'selectedCardComponent'], fromJS(action.payload))
  }

  if (action.type === actions.CHANGE_CARD_COMPONENT_COLOR) {
    const indexOfCurrentCardComponent = state.getIn(['api', 'cardComponents']).findIndex(
      (cardComponent) => cardComponent.get('id') === action.payload.currentCardComponent.id
    )
    return state
      .setIn(['api', 'cardComponents', indexOfCurrentCardComponent, 'color'], fromJS(action.payload.newColor))
  }

  if (action.type === actions.CHANGE_CARD_COMPONENT_COULD_NOT_BE_SAVED) {
    return state.setIn(['api', 'cardComponentColorCouldNotBeSaved'], fromJS(action.payload))
  }

  if (action.type === actions.CHANGE_CARD_LAST_CARD_COMPONENT_MODIFIED) {
    return state
      .setIn(['api', 'cardLastCardComponentModified'], fromJS(action.payload.currentCardComponent))
      .setIn(['api', 'cardFirstTimeChangedColor'], fromJS(action.payload.cardFirstTimeChangedColor))
  }
  if (action.type === actions.CLEAN_CARD_LAST_CARD_COMPONENT_MODIFIED) {
    const indexOfCurrentCardComponent = state.getIn(['api', 'cardComponents']).findIndex(
      (cardComponent) => cardComponent.get('id') === action.payload.cardLastCardComponentModified.id
    )
    return state
      .setIn(['api', 'cardComponents', indexOfCurrentCardComponent, 'color'], fromJS(action.payload.cardLastCardComponentModified.color))
      .setIn(['api', 'cardComponents', indexOfCurrentCardComponent, 'name'], fromJS(action.payload.cardLastCardComponentModified.name))
      .setIn(['api', 'cardLastCardComponentModified'], fromJS({}))
      .setIn(['api', 'cardFirstTimeChangedColor'], fromJS(action.payload.cardFirstTimeChangedColor))
  }

  if (action.type === actions.CHANGE_CARD_EDITABLE) {
    return state.setIn(['api', 'cardComponentEditable'], !state.getIn(['api', 'cardComponentEditable']))
  }

  return state
}
