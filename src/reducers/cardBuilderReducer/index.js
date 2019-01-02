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
    selectedSchedule: 0
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

  return state
}
