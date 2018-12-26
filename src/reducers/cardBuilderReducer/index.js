import {
  fromJS
} from 'immutable'

import * as actions from './actions'

const initialState = fromJS({
  api: {
    jobs: [],
    schedules: [],
    priorities: [],
    cardComponents: []
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
      .setIn(['api'], fromJS(action.payload.api))
      .setIn(['isCallInProgress'], fromJS(action.payload.isCallInProgress))
  }
  return state
}
