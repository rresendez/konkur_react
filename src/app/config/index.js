import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux'

import createSagaMiddleware from 'redux-saga'

import * as reducers from '../../reducers'
import rootSaga from '../../sagas'


const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers({
    ...reducers
  }),
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

rootSaga.forEach(saga => sagaMiddleware.run(saga))


export default store
