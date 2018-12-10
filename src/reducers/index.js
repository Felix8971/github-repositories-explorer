import { combineReducers } from 'redux'

const inputText = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_INPUT':
      // console.log('action.data=', action.data)
      return action.data;
    default:
      return state
  }
}

const outputText = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_OUTPUT':
      return action.data;
    default:
      return state
  }
}

export default combineReducers({
  inputText,
  outputText,
})
