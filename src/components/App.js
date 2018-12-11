import React, { Component } from 'react';
import '../style.scss';
import Convertion from './Convertion';
import { connect } from 'react-redux';
import Explorer from './Explorer';
import { getRepos } from '../helpers';

class App extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    getRepos(this.props.dispatch, 0);//we add the repo list to the store
  }

  render() {
    console.log('this=', this);
    return (
      <div>
        <h1 className="title">GitHuh repositories explorer</h1>
        <h2>Step 1</h2>
        <Convertion />
        <h2>Step 2</h2>
        <Explorer />
      </div>
    );
  }
}

const mapStateToProps = (state) => { return state };

//Connects the App component to the Redux store.
export default connect(mapStateToProps)(App);

