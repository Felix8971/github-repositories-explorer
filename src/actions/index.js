export const updateInputTextAction = data => ({
  type: 'UPDATE_INPUT',
  data,
});

export const updateRepoList = data => ({
  type: 'UPDATE_REPO_LIST',
  data,
});

export const resetRepoList = data => ({
  type: 'RESET_REPO_LIST',
  data,
});

export const incrementCurrentIndex = data => ({
  type: 'INCREMENT_CURRENT_INDEX',
  data,
});

export const decrementCurrentIndex = data => ({
  type: 'DECREMENT_CURRENT_INDEX',
  data,
});

export const setCurrentIndex = data => ({
  type: 'SET_CURRENT_INDEX',
  data,
});

export const resetCurrentIndex = () => ({
  type: 'RESET_CURRENT_INDEX',
});

export const updateMinId = data => ({
  type: 'UPDATE_MIN_ID',
  data,
});

export const updateMaxId = data => ({
  type: 'UPDATE_MAX_ID',
  data,
});

export const setPreviousRepoListIdMin = data => ({
  type: 'SET_PREV_REPO_ID_MIN',
  data,
});

export const updateFirstId = data => ({
  type: 'UPDATE_FIRST_ID',
  data,
});

export const incrementChapterId = data => ({
  type: 'INCREMENT_CHAPTER_ID',
  data,
});

export const decrementChapterId = data => ({
  type: 'DECREMENT_CHAPTER_ID',
  data,
});

export const resetChapterId = data => ({
  type: 'RESET_CHAPTER_ID',
  data,
});

export const addChapter = data => ({
  type: 'ADD_CHAPTER',
  data,
});