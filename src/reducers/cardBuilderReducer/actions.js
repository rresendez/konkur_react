export const SAGA_INIT_CARDBUILDER = 'cardBuilderReducer/SAGA_INIT_CARDBUILDER'
export const SAGA_CHANGE_CARD_COMPONENT_COLOR = 'cardBuilderReducer/SAGA_CHANGE_CARD_COMPONENT_COLOR'
export const SAGA_CANCEL_CARD_COMPONENT_MODIFICATION = 'cardBuilderReducer/SAGA_CANCEL_CARD_COMPONENT_MODIFICATION'
export const SAGA_CREATE_CARD_COMPONENT = 'cardBuilderReducer/SAGA_CREATE_CARD_COMPONENT'

export const SAVE_CATALOGS = 'cardBuilderReducer/SAVE_CATALOGS'
export const CHANGE_IS_CALL_IN_PROGRESS = 'cardBuilderReducer/CHANGE_IS_CALL_IN_PROGRESS'
export const CHANGE_SELECTED_SCHEDULE = 'cardBuilderReducer/CHANGE_SELECTED_SCHEDULE'
export const CHANGE_SELECTED_PRIORITY = 'cardBuilderReducer/CHANGE_SELECTED_PRIORITY'
export const CHANGE_SELECTED_JOBS = 'cardBuilderReducer/CHANGE_SELECTED_JOBS'
export const CHANGE_CARD_SUB_COMPONENT = 'cardBuilderReducer/CHANGE_CARD_SUB_COMPONENT'
export const CHANGE_CARD_TITLE = 'cardBuilderReducer/CHANGE_CARD_TITLE'
export const CHANGE_CARD_DATA_LEVEL = 'cardBuilderReducer/CHANGE_CARD_DATA_LEVEL'
export const CHANGE_SELECTED_CARD_COMPONENT = 'cardBuilderReducer/CHANGE_SELECTED_CARD_COMPONENT'
export const CHANGE_CARD_COMPONENT_COLOR = 'cardBuilderReducer/CHANGE_CARD_COMPONENT_COLOR'
export const CHANGE_CARD_COMPONENT_COULD_NOT_BE_SAVED = 'cardBuilderReducer/CHANGE_CARD_COMPONENT_COULD_NOT_BE_SAVED'
export const CHANGE_CARD_LAST_CARD_COMPONENT_MODIFIED = 'cardBuilderReducer/CHANGE_CARD_LAST_CARD_COMPONENT_MODIFIED'
export const CLEAN_CARD_LAST_CARD_COMPONENT_MODIFIED = 'cardBuilderReducer/CLEAN_CARD_LAST_CARD_COMPONENT_MODIFIED'
export const CHANGE_CARD_EDITABLE = 'cardBuilderReducer/CHANGE_CARD_EDITABLE'
export const CHANGE_CARD_LOADING = 'cardBuilderReducer/CHANGE_CARD_LOADING'
export const SAVE_NEW_CARD_COMPONENT = 'cardBuilderReducer/SAVE_NEW_CARD_COMPONENT'
export const CHANGE_CARD_COMPONENT_NEW_TITLE = 'cardBuilderReducer/CHANGE_CARD_COMPONENT_NEW_TITLE'

export const sagaInitCardBuilder = () => ({
  type: SAGA_INIT_CARDBUILDER
})

export const sagaChangeCardComponentColor = (payload) => ({
  type: SAGA_CHANGE_CARD_COMPONENT_COLOR,
  payload
})

export const sagaCancelCardComponentModification = (payload) => ({
  type: SAGA_CANCEL_CARD_COMPONENT_MODIFICATION,
  payload
})

export const sagaCreateCardComponent = (payload) => ({
  type: SAGA_CREATE_CARD_COMPONENT,
  payload
})

export const changeCardComponentNewTitle = (payload) => ({
  type: CHANGE_CARD_COMPONENT_NEW_TITLE,
  payload
})

export const saveNewCardComponent = (payload) => ({
  type: SAVE_NEW_CARD_COMPONENT,
  payload
})

export const changeCardLoading = (payload) => ({
  type: CHANGE_CARD_LOADING,
  payload
})

export const saveCatalogs = (payload) => ({
  type: SAVE_CATALOGS,
  payload
})

export const changeIsCardInProgress = (payload) => ({
  type: CHANGE_IS_CALL_IN_PROGRESS,
  payload
})

export const changeSelectedSchedule = (payload) => ({
  type: CHANGE_SELECTED_SCHEDULE,
  payload
})

export const changeSelectedPriority = (payload) => ({
  type: CHANGE_SELECTED_PRIORITY,
  payload
})

export const changeSelectedJobs = (payload) => ({
  type: CHANGE_SELECTED_JOBS,
  payload
})

export const changeCardSubComponent = (payload) => ({
  type: CHANGE_CARD_SUB_COMPONENT,
  payload
})

export const changeCardTitle = (payload) => ({
  type: CHANGE_CARD_TITLE,
  payload
})

export const changeCardDataLevel = (payload) => ({
  type: CHANGE_CARD_DATA_LEVEL,
  payload
})

export const changeSelectedCardComponent = (payload) => ({
  type: CHANGE_SELECTED_CARD_COMPONENT,
  payload
})

export const changeCardComponentColor = (payload) => ({
  type: CHANGE_CARD_COMPONENT_COLOR,
  payload
})

export const changeCardComponentColorCouldNotBeSaved = (payload) => ({
  type: CHANGE_CARD_COMPONENT_COULD_NOT_BE_SAVED,
  payload
})

export const cleanCardLastCardComponentModifed = (payload) => ({
  type: CLEAN_CARD_LAST_CARD_COMPONENT_MODIFIED,
  payload
})

export const changeCardLastCardComponentModified = (payload) => ({
  type: CHANGE_CARD_LAST_CARD_COMPONENT_MODIFIED,
  payload
})

export const changeCardEditable = (payload) => ({
  type: CHANGE_CARD_EDITABLE,
  payload
})
