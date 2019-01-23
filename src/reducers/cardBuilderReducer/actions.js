export const SAGA_INIT_CARDBUILDER = 'cardBuilderReducer/SAGA_INIT_CARDBUILDER'
export const SAGA_CHANGE_CARD_COMPONENT_COLOR = 'cardBuilderReducer/SAGA_CHANGE_CARD_COMPONENT_COLOR'
export const SAGA_CANCEL_CARD_COMPONENT_MODIFICATION = 'cardBuilderReducer/SAGA_CANCEL_CARD_COMPONENT_MODIFICATION'
export const SAGA_CREATE_CARD_COMPONENT = 'cardBuilderReducer/SAGA_CREATE_CARD_COMPONENT'
export const SAGA_DELETE_CARD_COMPONENT = 'cardBuilderReducer/SAGA_DELETE_CARD_COMPONENT'
export const SAGA_UPDATE_CARD_COMPONENT = 'cardBuilderReducer/SAGA_UPDATE_CARD_COMPONENT'
export const SAGA_VALIDATE_CARD = 'cardBuilderReducer/SAGA_VALIDATE_CARD'
export const SAGA_SAVE_CARD = 'cardBuilderReducer/SAGA_SAVE_CARD'
export const SAGA_INIT_CARDBUILDER_UPDATE = 'cardBuilderReducer/SAGA_INIT_CARDBUILDER_UPDATE'
export const SAGA_SAVE_CARD_ATTACHMENT = 'cardBuilderReducer/SAGA_SAVE_CARD_ATTACHMENT'

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
export const DELETE_CARD_COMPONENT = 'cardBuilderReducer/DELETE_CARD_COMPONENT'
export const CHANGE_CARD_EDITABLE_UPDATE = 'cardBuilderReducer/CHANGE_CARD_EDITABLE_UPDATE'
export const SAVE_UPDATED_CARD_COMPONENT = 'cardBuilderReducer/SAVE_UPDATED_CARD_COMPONENT'
export const CHANGE_CARD_COMPONENT_EDITABLE_FOR_NEW = 'cardBuilderReducer/CHANGE_CARD_COMPONENT_EDITABLE_FOR_NEW'
export const CHANGE_GLOBAL_CARD_LOADING = 'cardBuilderReducer/CHANGE_GLOBAL_CARD_LOADING'
export const SAVE_TABLE_SCHEMA = 'cardBuilderReducer/SAVE_TABLE_SCHEMA'
export const CHANGE_CARD_TABLE_SWITCH = 'cardBuilderReducer/CHANGE_CARD_TABLE_SWITCH'
export const CHANGE_CARD_MODAL_SWTICH = 'cardBuilderReducer/CHANGE_CARD_MODAL_SWTICH'
export const CHANGE_CARD_SAVING_SWITCH = 'cardBuilderReducer/CHANGE_CARD_SAVING_SWITCH'
export const SAVE_CARD_FETCHED = 'cardBuilderReducer/SAVE_CARD_FETCHED'
export const CHANGE_CARD_ATTACH_SWITCH = 'cardBuilderReducer/CHANGE_CARD_ATTACH_SWITCH'
export const CHANGE_CARD_ATTACHMENT = 'cardBuilderReducer/CHANGE_CARD_ATTACHMENT'

export const sagaInitCardBuilderUpdate = (payload) => ({
  type: SAGA_INIT_CARDBUILDER_UPDATE,
  payload
})

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

export const sagaDeleteCardComponent = (payload) => ({
  type: SAGA_DELETE_CARD_COMPONENT,
  payload
})

export const sagaUpdateCardComponent = (payload) => ({
  type: SAGA_UPDATE_CARD_COMPONENT,
  payload
})

export const sagaValidateCard = (payload) => ({
  type: SAGA_VALIDATE_CARD,
  payload
})

export const sagaSaveCard = (payload) => ({
  type: SAGA_SAVE_CARD,
  payload
})

export const sagaSaveCardAttachment = (payload) => ({
  type: SAGA_SAVE_CARD_ATTACHMENT,
  payload
})

export const changeCardAttachSwitch = (payload) => ({
  type: CHANGE_CARD_ATTACH_SWITCH,
  payload
})

export const saveCardFetched = (payload) => ({
  type: SAVE_CARD_FETCHED,
  payload
})

export const changeCardAttachment = (payload) => ({
  type: CHANGE_CARD_ATTACHMENT,
  payload
})

export const changeCardSavingSwitch = (payload) => ({
  type: CHANGE_CARD_SAVING_SWITCH,
  payload
})

export const changeCardModalSwitch = (payload) => ({
  type: CHANGE_CARD_MODAL_SWTICH,
  payload
})

export const saveTableSchema = (payload) => ({
  type: SAVE_TABLE_SCHEMA,
  payload
})

export const changeCardTableSwitch = (payload) => ({
  type: CHANGE_CARD_TABLE_SWITCH,
  payload
})

export const changeGlobalCardLoading = (payload) => ({
  type: CHANGE_GLOBAL_CARD_LOADING,
  payload
})

export const changeCardComponentEditableForNew = (payload) => ({
  type: CHANGE_CARD_COMPONENT_EDITABLE_FOR_NEW,
  payload
})

export const saveUpdatedCardComponent = (payload) => ({
  type: SAVE_UPDATED_CARD_COMPONENT,
  payload
})

export const changedCardEditableUpdate = (payload) => ({
  type: CHANGE_CARD_EDITABLE_UPDATE,
  payload
})

export const deleteCardComponent = (payload) => ({
  type: DELETE_CARD_COMPONENT,
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
