
import fetch from 'isomorphic-fetch';
import { updateRepoList, updateMaxId } from './actions'
const url = 'https://api.github.com';

export const getRepos = (dispatch, since = 0) => {
  fetch(url + '/repositories?since=' + since)
    .then(function (resp) { return resp.json(); })
    .then(function (data) {
      console.log('data=', data);
      dispatch(updateRepoList(data));
      dispatch(updateMaxId(data[99].id));
    })
    .catch(function(error) {
      if ( dispatch ) {
        // dispatch(updateRepoList(data));
      }
    });
}


