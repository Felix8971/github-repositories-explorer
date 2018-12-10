import React from 'react'
import {updateInputTextAction} from '../actions';
import connect from 'react-redux/es/connect/connect';


function transformInputSelector(state) {
  let matrix = [];
  if (state) {
    try {
      const input = JSON.parse(state);
      //console.log('input object=',input);
      for (const i in input) {
        for (let j=0;j<input[i].length;j++) {
          matrix = [...matrix, input[i][j] ];
        }
      }
      console.log('matrix=',matrix);
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

/* input
    { 
    "0": [ 
           { "id": 10, "title": "House", "level": 0, "children": [], "parent_id": null} 
         ],
    "1": [ 
           { "id": 12, "title": "Red Roof", "level": 1, "children": [], "parent_id": 10},
           { "id": 18, "title": "Blue Roof","level": 1, "children": [], "parent_id": 10},
           { "id": 13, "title": "Wall",     "level": 1, "children": [], "parent_id": 10}
         ],
    "2": [ 
           { "id": 17, "title": "Blue Window", "level": 2, "children": [], "parent_id": 12}, 
           { "id": 16, "title": "Door", "level": 2, "children": [], "parent_id": 13 },
           { "id": 15, "title": "Red Window", "level": 2, "children": [], "parent_id": 12 }
         ]
    }

    we will insert 12, 18 and 13 inside the children property of 10 because they have "parent_id": 10
    we will insert 17 and 15 inside the children array of 12
    we will insert 16 inside the children array of 13
   
  */

class Convertion extends React.Component {
  constructor(props) {
    super();
    this.handleInput = this.handleInputChange.bind(this);
  }
  
  handleInputChange(event, onInputChange) {
    onInputChange(event.target.value);
    console.log(event.target.value);
  }

  render() {
    const self = this;
    console.log('this.props=',this.props);
    return (
      <div className="container">
        <div className="column">
          <div>Input</div>
          <textarea 
            rows="4"
            cols="50"
            className="input"
            onChange={event => this.handleInputChange(event, self.props.onInputChange)}
            value={this.props.input}
            placeholder="Copy past a json file here..."
          ></textarea>
        </div>
        <div className="column">
          <div>Output</div>   
          <textarea rows="4" cols="50" className="output" value={this.props.output}>
            <pre></pre>
          </textarea>
        </div>
      </div>
    );
  
  }
}


const mapStateToProps = (state) => {
  return {
    input: state.inputText, 
    output: transformInputSelector(state.inputText), 
  }
};

function mapDispatchToProps(dispatch) {
  return {
    onInputChange : (data) => {
      dispatch(updateInputTextAction(data));
    },
  };
}

//Connects the App component to the Redux store.
export default connect(mapStateToProps, mapDispatchToProps)(Convertion);
