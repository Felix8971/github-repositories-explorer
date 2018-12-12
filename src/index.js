import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers'


const initialState = { 
  repoList: [], // the 100 repos return by the API for a given "since" parameter 
  // repoListPage: [],// 10 repos list (a sliding window in repoList)
  currentIndex: 0,// index of the fist element of repoListPage (read in repoList key)
  maxId: 1, //id of the last repo in repoList 
};

const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
