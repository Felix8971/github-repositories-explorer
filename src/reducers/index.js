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
    case 'RESET_REPO_LIST':
      return [];  
    default:
      return state;
  }
};


const currentIndex = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT_CURRENT_INDEX':
      return state + NB_REPO_PER_PAGE;
    case 'DECREMENT_CURRENT_INDEX':
      const delta = state - NB_REPO_PER_PAGE;
      return delta >= 0 ? delta : 0;
    case 'RESET_CURRENT_INDEX':
      return 0;
    case 'SET_CURRENT_INDEX':
      return action.data;
    default:
      return state;
  }
};

const minId = (state = 0, action) => {
  switch (action.type) {
    case 'UPDATE_MIN_ID':
      return action.data;
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

const previousRepoListIdMin = (state = 0, action) => {
  switch (action.type) {
    case 'SET_PREV_REPO_ID_MIN':
      return action.data;
    default:
      return state;
  }
};

const firstId = (state = null, action) => {
  switch (action.type) {
    case 'UPDATE_FIRST_ID':
      // we keep the very first id of the first page
      if ( state === null ) {
        return action.data;
      } else {
        return state;
      }
    default:
      return state;
  }
};

const chapterId = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT_CHAPTER_ID':
      return state + 1;
    case 'DECREMENT_CHAPTER_ID':
      const delta = state - 1;
      return delta >= 0 ? delta : 0;
    case 'RESET_CHAPTER_ID':
      return 0;
    default:
      return state;
  }
};

const chapterId2MinId = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CHAPTER':
      const newState = Object.assign(state);
      const length = newState.length;
      newState[length] = action.data; 
      return newState;
    default:
      return state;
  }
};


export default combineReducers({
  inputText,
  repoList,
  currentIndex,
  firstId,
  minId,
  maxId,
  previousRepoListIdMin,
  chapterId,
  chapterId2MinId,
});
