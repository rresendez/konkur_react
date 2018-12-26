import { sagas as initSaga } from './initSaga'
import { sagas as errorSaga } from './errorSaga'
import { sagas as cardBuilderSaga } from './cardBuilderSaga'

export default [
  ...initSaga,
  ...errorSaga,
  ...cardBuilderSaga
]
