import { combineReducers } from 'redux';

const NB_REPO_PER_PAGE = 10;

const inputText = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_INPUT':
      // console.log('action.data=', action.data)
      return action.data;
    default:
      return state;
  }
};

const repoList = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_REPO_LIST':
      return action.data;
    default:
      return state;
  }
};

const currentIndex = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT_CURRENT_INDEX':
      return state + NB_REPO_PER_PAGE;
    case 'DECREMENT_CURRENT_INDEX':
      return state - NB_REPO_PER_PAGE;
    default:
      return state;
  }
};

const maxId = (state = 0, action) => {
  switch (action.type) {
    case 'UPDATE_MAX_ID':
      return action.data;
    default:
      return state;
  }
};

export default combineReducers({
  inputText,
  repoList,
  currentIndex,
  maxId,
});
