import React, { Component } from 'react';
import '../style.scss';
import Convertion from './Convertion';
import Explorer from './Explorer';

class App extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
   
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


//Connects the App component to the Redux store.
export default App;
