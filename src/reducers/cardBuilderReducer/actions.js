export const SAGA_INIT_CARDBUILDER = 'cardBuilderReducer/SAGA_INIT_CARDBUILDER'

export const SAVE_CATALOGS = 'cardBuilderReducer/SAVE_CATALOGS'
export const CHANGE_IS_CALL_IN_PROGRESS = 'cardBuilderReducer/CHANGE_IS_CALL_IN_PROGRESS'
export const CHANGE_SELECTED_SCHEDULE = 'cardBuilderReducer/CHANGE_SELECTED_SCHEDULE'
export const CHANGE_SELECTED_PRIORITY = 'cardBuilderReducer/CHANGE_SELECTED_PRIORITY'
export const CHANGE_SELECTED_JOBS = 'cardBuilderReducer/CHANGE_SELECTED_JOBS'

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
