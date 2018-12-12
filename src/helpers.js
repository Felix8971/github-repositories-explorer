
import fetch from 'isomorphic-fetch';
import { updateRepoList, updateMinId, updateMaxId, updateFirstId, addError } from './actions'
const url = 'https://api.github.com';
import { NB_REPO_PER_CHAPTER } from './Constant';

export const getRepos = (dispatch, since = 0) => {
  fetch(`${url}/repositories?since=${since}`)
    .then(resp => resp.json())
    .then((data) => {
      dispatch(updateRepoList(data));
      dispatch(updateMinId(data[0].id));
      dispatch(updateMaxId(data[NB_REPO_PER_CHAPTER-1].id));
      dispatch(updateFirstId(data[0].id));
    })
    .catch((error) => {
      if ( dispatch ) {
        dispatch(addError('Server error...'));
      }
    });
}


