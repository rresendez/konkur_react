export const SAGA_INIT_CARDBUILDER = 'cardBuilderReducer/SAGA_INIT_CARDBUILDER'

export const SAVE_CATALOGS = 'cardBuilderReducer/SAVE_CATALOGS'
export const CHANGE_IS_CALL_IN_PROGRESS = 'cardBuilderReducer/CHANGE_IS_CALL_IN_PROGRESS'

export const sagaInitCardBuilder = () => ({
  type: SAGA_INIT_CARDBUILDER
})

export const saveCatalogs = (payload) => ({
  type: SAVE_CATALOGS,
  payload
})

export const changeIsCardInProgress = (payload) => ({
  type: CHANGE_IS_CALL_IN_PROGRESS,
  payload
})
