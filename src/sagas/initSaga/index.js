import {
  takeLatest,
  all
} from 'redux-saga/effects'

import * as iRActions from '../../reducers/initReducer/actions'

function * genInitialFetch () {
  try {

  } catch (error) {
  }
}

function * defaultSaga () {
  yield all([
    takeLatest(iRActions.SAGA_INITIAL_FETCH, genInitialFetch)
  ])
}

export const sagas = [
  defaultSaga
]
