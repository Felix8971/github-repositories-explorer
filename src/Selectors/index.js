const NB_REPO_PER_PAGE = 10;

export const transformInputSelector = (state) => {
  let matrix = [];
  if (state) {
    try {
      const input = JSON.parse(state);
      for (const i in input) {
        if (Object.prototype.hasOwnProperty.call(input, i)) {
          for (let j = 0; j < input[i].length; j++) {
            matrix = [...matrix, input[i][j]];
          }
        }
      }
      for (let i = 0; i < matrix.length; i++) {
        const parentId = matrix[i].parent_id;
        if (parentId !== null) {
          for (let j = 0; j < matrix.length; j++) {
            if (matrix[j].id === parentId) {
              matrix[j].children = [...matrix[j].children, matrix[i]];
            }
          }
        }
      }
    } catch (e) {
      return 'Wrong format, please use json...';
    }
  }
  return matrix.length > 0 ? JSON.stringify(matrix, null, 2) : '';
};


export const returnRepoPage = (index, state) => {
  return state.slice(index, index + NB_REPO_PER_PAGE);
};
