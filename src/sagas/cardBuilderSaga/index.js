import {
  takeLatest,
  all,
  put
} from 'redux-saga/effects'

import { getPervicedColorValue } from '../../global-styles/util'

import * as cRActions from '../../reducers/cardBuilderReducer/actions'
import * as eRActions from '../../reducers/errorReducer/actions'

import {
  getSchedules, getJobs, getPriorities, getCardComponents, createCardComponent
} from './calls'

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
    const cardComponents = cardComponentsResponse.data.reverse()

    const reducerPayload = {
      api: {
        jobs,
        schedules,
        priorities,
        cardComponents
      },
      isCallInProgress: false,
      cardStatus: 'ready'
    }

    yield put(cRActions.saveCatalogs(reducerPayload))
  } catch (error) {
    debugger
  }
}

function * genChangeCardComponent (action) {
  if (!action.payload.cardFirstTimeChangedColor) {
    yield put(cRActions.changeCardLastCardComponentModified({
      currentCardComponent: action.payload.currentCardComponent,
      cardFirstTimeChangedColor: true
    }))
  }

  yield put(cRActions.changeCardComponentColor({
    newColor: action.payload.newColor,
    currentCardComponent: action.payload.currentCardComponent
  }))

  const currentPercivedColor = getPervicedColorValue(action.payload.newColor) // action.payload.newColor
  const percivedColors = action.payload.cardComponentCatalog.map((element) => getPervicedColorValue(element.color))
  let shouldNotBeSave = false

  action.payload.cardComponentCatalog.forEach((cardComponent) => {
    if (!shouldNotBeSave) {
      if (cardComponent.color === action.payload.newColor) {
        shouldNotBeSave = true
      }
    }
  })

  percivedColors.forEach(percivedColor => {
    if (!shouldNotBeSave) {
      const diffPervicedValue = percivedColor - currentPercivedColor
      if (!diffPervicedValue > 50 || !diffPervicedValue < -50) {
        shouldNotBeSave = true
      }
    }
  })
  if (shouldNotBeSave) {
    yield put(cRActions.changeCardComponentColorCouldNotBeSaved(true))
    yield put(eRActions.sagaSetError({
      error: true,
      message: 'this color value is too close to another one, pick another'
    }))
  } else {
    yield put(cRActions.changeCardComponentColorCouldNotBeSaved(false))
  }
}

function * genCancelCardComponentModification (action) {
  if (Object.keys(action.payload.cardLastCardComponentModified).length > 0) {
    yield put(cRActions.cleanCardLastCardComponentModifed({
      cardLastCardComponentModified: action.payload.cardLastCardComponentModified,
      cardFirstTimeChangedColor: false
    }))
  }
}

function * genCreateCardComponent (action) {
  try {
    console.log(action)
    yield put(cRActions.changeCardLoading(true))
    debugger

    const cardComponentCreatePayload = {
      name: action.payload.newCardComponent.name,
      color: action.payload.newCardComponent.color
    }

    const response = yield createCardComponent(cardComponentCreatePayload)
  } catch (error) {
    yield put(eRActions.sagaSetError({
      error: true,
      message: error.message
    }))
    yield put(cRActions.changeCardLoading(false))
  }
}

function * defaultSaga () {
  yield all([
    takeLatest(cRActions.SAGA_INIT_CARDBUILDER, genInitialFetch),
    takeLatest(cRActions.SAGA_CHANGE_CARD_COMPONENT_COLOR, genChangeCardComponent),
    takeLatest(cRActions.SAGA_CANCEL_CARD_COMPONENT_MODIFICATION, genCancelCardComponentModification),
    takeLatest(cRActions.SAGA_CREATE_CARD_COMPONENT, genCreateCardComponent)
  ])
}

export const sagas = [
  defaultSaga
]
