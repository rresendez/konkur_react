import {
  takeLatest,
  all,
  put
} from 'redux-saga/effects'

import { getPervicedColorValue } from '../../global-styles/util'

import * as cRActions from '../../reducers/cardBuilderReducer/actions'
import * as eRActions from '../../reducers/errorReducer/actions'

import {
  getSchedules, getJobs, getPriorities, getCardComponents, createCardComponent,
  deleteCardComponent, updateCardComponent, validateCard
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
      cardFirstTimeChangedColor: false,
      isUpdate: false
    }))
  }
}

function * genCreateCardComponent (action) {
  try {
    yield put(cRActions.changeCardLoading(true))

    const cardComponentCreatePayload = {
      name: action.payload.newCardComponent.name,
      color: action.payload.newCardComponent.color
    }

    const response = yield createCardComponent(cardComponentCreatePayload)
    const reducerPayload = {
      newCardComponent: response.data
    }
    yield put(cRActions.saveNewCardComponent(reducerPayload))
  } catch (error) {
    yield put(eRActions.sagaSetError({
      error: true,
      message: error.message
    }))
    yield put(cRActions.changeCardLoading(false))
  }
}

function * genDeleteCardComponent (action) {
  try {
    yield put(cRActions.changeCardLoading(true))
    console.log(action)
    const response = yield deleteCardComponent(action.payload.cardComponentToDelete.id)
    yield put(cRActions.deleteCardComponent(action.payload.cardComponentToDelete))
  } catch (error) {
    yield put(eRActions.sagaSetError({
      error: true,
      message: error.message
    }))
    yield put(cRActions.changeCardLoading(false))
  }
}

function * genUpdateCardComponent (action) {
  try {
    yield put(cRActions.changeCardLoading(true))

    const cardComponentUpdatePayload = {
      name: action.payload.newCardComponent.name,
      color: action.payload.newCardComponent.color
    }

    const response = yield updateCardComponent(action.payload.currentCardComponentSelected.id, cardComponentUpdatePayload)
    const reducerPayload = {
      updatedCardComponent: response.data
    }
    yield put(cRActions.saveUpdatedCardComponent(reducerPayload))
  } catch (error) {
    yield put(eRActions.sagaSetError({
      error: true,
      message: error.message
    }))
    yield put(cRActions.changeCardLoading(false))
  }
}

function * genValidateCard (action) {
  try {
    yield put(cRActions.changeGlobalCardLoading(true))
    let selectedJobs
    const payload = {}
    if (action.payload.selectedJobs.length === 1) {
      if (action.payload.selectedJobs[0].name === '---') {
        selectedJobs = []
      } else {
        selectedJobs = [action.payload.selectedJobs[0].id]
      }
    } else {
      selectedJobs = action.payload.selectedJobs.map((job) => job.id)
    }
    payload.jobList = selectedJobs
    payload.subComponent = action.payload.cardSubComponent
    payload.title = action.payload.cardTitle
    payload.level = action.payload.cardDataLevel
    payload.cardComponent = action.payload.selectedCardComponent.id
    payload.priority = action.payload.selectedPriority.id
    payload.schedule = action.payload.selectedSchedule.id
    payload.sourceStatement = action.payload.statementValue
    const response = yield validateCard(payload)

    const reducerPayload = {
      cardColumns: response.data.columns,
      cardRows: response.data.rows
    }

    yield put(cRActions.saveTableSchema(reducerPayload))
  } catch (error) {
    yield put(eRActions.sagaSetError({
      error: true,
      message: error.message
    }))
    yield put(cRActions.changeGlobalCardLoading(false))
  }
}

function * defaultSaga () {
  yield all([
    takeLatest(cRActions.SAGA_INIT_CARDBUILDER, genInitialFetch),
    takeLatest(cRActions.SAGA_CHANGE_CARD_COMPONENT_COLOR, genChangeCardComponent),
    takeLatest(cRActions.SAGA_CANCEL_CARD_COMPONENT_MODIFICATION, genCancelCardComponentModification),
    takeLatest(cRActions.SAGA_CREATE_CARD_COMPONENT, genCreateCardComponent),
    takeLatest(cRActions.SAGA_DELETE_CARD_COMPONENT, genDeleteCardComponent),
    takeLatest(cRActions.SAGA_UPDATE_CARD_COMPONENT, genUpdateCardComponent),
    takeLatest(cRActions.SAGA_VALIDATE_CARD, genValidateCard)
  ])
}

export const sagas = [
  defaultSaga
]
