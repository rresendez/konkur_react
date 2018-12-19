import { sagas as initSaga } from './initSaga'
import { sagas as errorSaga } from './errorSaga'

export default [
  ...initSaga,
  ...errorSaga
]
