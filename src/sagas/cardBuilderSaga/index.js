import {
  takeLatest,
  all,
  put
} from 'redux-saga/effects'

import * as cRActions from '../../reducers/cardBuilderReducer/actions'

import { getSchedules, getJobs, getPriorities, getCardComponents } from './calls'

function * genInitialFetch () {
  try {
    yield put(cRActions.changeIsCardInProgress(true))

    const schedulesResponse = yield getSchedules()
    const schedules = schedulesResponse.data

    const jobsResponse = yield getJobs()
    const jobs = jobsResponse.data

    const prioritiesResponse = yield getPriorities()
    const priorities = prioritiesResponse.data

    const cardComponentsResponse = yield getCardComponents()
    const cardComponents = cardComponentsResponse.data

    const reducerPayload = {
      api: {
        jobs,
        schedules,
        priorities,
        cardComponents
      },
      isCallInProgress: false
    }

    yield put(cRActions.saveCatalogs(reducerPayload))
  } catch (error) {
    debugger
  }
}

function * defaultSaga () {
  yield all([
    takeLatest(cRActions.SAGA_INIT_CARDBUILDER, genInitialFetch)
  ])
}

export const sagas = [
  defaultSaga
]
