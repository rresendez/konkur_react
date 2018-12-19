import {
  fromJS
} from 'immutable'

import * as eRActions from './actions'

const initialState = fromJS({
  error: {
    error: false,
    message: '',
    codeError: '',
    statusCode: 0
  }
})

export default function errorReducer (state = initialState, action) {
  if (action.type === eRActions.SET_ERROR) {
    return state
      .setIn(['error', 'error'], action.payload.error)
      .setIn(['error', 'message'], action.payload.message)
      .setIn(['error', 'codeError'], action.payload.codeError)
      .setIn(['error', 'statusCode'], action.payload.statusCode)
  }

  if (action.type === eRActions.CLEAN_ERROR) {
    return state
      .setIn(['error', 'error'], false)
      .setIn(['error', 'message'], '')
      .setIn(['error', 'codeError'], '')
      .setIn(['error', 'statusCode'], 0)
  }

  if (action.type === eRActions.SET_ERROR_KEY) {
    return state
      .setIn(['error', 'error'], action.payload.error)
  }
  return state
}
