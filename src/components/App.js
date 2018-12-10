import React, { Component } from 'react';
import '../style.scss';
import Convertion from './Convertion';

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
        <Convertion />
      </div>
    );
  }
}


//Connects the App component to the Redux store.
export default App;
