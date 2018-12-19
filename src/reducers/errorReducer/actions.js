export const SAGA_SET_ERROR = 'errorReducer/SAGA_SET_ERROR'
export const SAGA_CLEAN_ERROR = 'errorReducer/SAGA_CLEAN_ERROR'
export const SAGA_CLEAN_MESSAGE = 'errorReducer/SAGA_CLEAN_MESSAGE'

export const SET_ERROR = 'errorReducer/SET_ERROR'
export const CLEAN_ERROR = 'errorReducer/CLEAN_ERROR'
export const SET_ERROR_KEY = 'errorReducer/SET_ERROR_KEY'

export const sagaSetError = (payload) => ({
  type: SAGA_SET_ERROR,
  payload
})

export const sagaCleanError = (payload) => ({
  type: SAGA_CLEAN_ERROR,
  payload
})

export const sagaCleanMessage = (payload) => ({
  type: SAGA_CLEAN_MESSAGE,
  payload
})

export const cleanError = () => ({
  type: CLEAN_ERROR
})

export const setError = (payload) => ({
  type: SET_ERROR,
  payload
})

export const setErrorKey = (payload) => ({
  type: SET_ERROR_KEY,
  payload
})
