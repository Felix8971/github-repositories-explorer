export const updateInputTextAction = data => ({
  type: 'UPDATE_INPUT',
  data,
});

export const updateRepoList = data => ({
  type: 'UPDATE_REPO_LIST',
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

export const updateMaxId = data => ({
  type: 'UPDATE_MAX_ID',
  data,
});
