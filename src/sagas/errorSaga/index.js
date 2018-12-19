import {
  takeLatest,
  all,
  put
} from 'redux-saga/effects'

import * as eRActions from '../../reducers/errorReducer/actions'

function * genSetError (action) {
  yield put(eRActions.setError({
    error: action.payload.error,
    message: action.payload.message,
    codeError: action.payload.codeError,
    statusError: action.payload.statusError
  }))
}

function * genCleanMessage (action) {
  yield put(eRActions.cleanError({
    error: false,
    message: '',
    codeError: '',
    statusError: 0
  }))
  window.clearInterval(action.payload)
}

function * genCleanError (action) {
  yield put(eRActions.setErrorKey({
    error: false
  }))
  action.payload.handler()
}

function * defaultSaga () {
  yield all([
    takeLatest(eRActions.SAGA_SET_ERROR, genSetError),
    takeLatest(eRActions.SAGA_CLEAN_ERROR, genCleanError),
    takeLatest(eRActions.SAGA_CLEAN_MESSAGE, genCleanMessage)
  ])
}

export const sagas = [
  defaultSaga
]
