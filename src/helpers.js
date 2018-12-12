
import fetch from 'isomorphic-fetch';
import { updateRepoList, updateMinId, updateMaxId, updateFirstId } from './actions'
const url = 'https://api.github.com';

export const getRepos = (dispatch, since = 0) => {
  fetch(`${url}/repositories?since=${since}`)
    .then(resp => resp.json())
    .then((data) => {
      // console.log('data=', data);
      dispatch(updateRepoList(data));
      dispatch(updateMinId(data[0].id));
      dispatch(updateMaxId(data[99].id));
      dispatch(updateFirstId(data[0].id));
    })
    .catch((error) => {
      if ( dispatch ) {
        // dispatch(updateRepoList(data));
      }
    });
}


