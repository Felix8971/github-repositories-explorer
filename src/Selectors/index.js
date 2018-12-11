const NB_REPO_PER_PAGE = 10;

export const transformInputSelector = (state) => {
  let matrix = [];
  console.log('state=',state);
  if (state) {
    try {
      const input = JSON.parse(state);
      //console.log('input object=',input);
      for (const i in input) {
        for (let j=0;j<input[i].length;j++) {
          matrix = [...matrix, input[i][j] ];
        }
      }
      // console.log('matrix=',matrix);
      for (let i=0;i<matrix.length;i++) {
        const parentId = matrix[i].parent_id;
        if ( parentId !== null) {
          for (let j=0;j<matrix.length;j++) {
            if ( matrix[j].id === parentId ) {
              matrix[j].children = [...matrix[j].children, matrix[i]];
            }
          }
        }
      }
    } catch (e) {
      console.log(e);
      return 'Wrong format, please feed me with json...';
    }
  }
  return matrix.length > 0 ? JSON.stringify(matrix, null, 2) : '';
}


export const returnRepoPage = (index, state) => {
  return state.slice(index, index+NB_REPO_PER_PAGE);
}