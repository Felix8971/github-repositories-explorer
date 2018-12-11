import React from 'react'
import {updateInputTextAction} from '../actions';
import { connect } from 'react-redux';
import {transformInputSelector} from '../Selectors';

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

/*
 If you check this component, we have two exports.
 The first export will export the dumb component Convertion and the default export will export the connected component connect(Convertion).
 We export both so that if we want to :
  * Test just the React component alone, you test the dumb component.
  * Test React-Redux part of the component, then test the connected component.
*/

export class Explorer extends React.Component {
  constructor(props) {
    super();
   
  }

  render() {
    const self = this;
    console.log('this.props=',this.props);
    return (
      <div className="container">
      
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
export default connect(mapStateToProps, mapDispatchToProps)(Explorer);
