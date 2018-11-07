import {
  fromJS
} from 'immutable'

const initialState = fromJS({
  init: {
    loader: true,
    error: false
  }
})

export default function initReducer (state = initialState, action) {
  return state
}
