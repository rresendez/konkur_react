import {
  takeLatest,
  all,
  put
} from 'redux-saga/effects'

import * as eRActions from '../../reducers/errorReducer/actions'

function * genSetError (action) {
  if (action.payload.statusCode !== 404) {
    yield put(eRActions.setError({
      error: action.payload.error,
      message: action.payload.message,
      codeError: action.payload.codeError,
      statusCode: action.payload.statusCode
    }))
  }
}

function * genCleanMessage (action) {
  yield put(eRActions.cleanError({
    error: false,
    message: '',
    codeError: '',
    statusCode: 0
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
