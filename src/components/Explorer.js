import React from 'react'
import {incrementCurrentIndex, decrementCurrentIndex /*, updateMaxId*/} from '../actions';
import { connect } from 'react-redux';
import {returnRepoPage} from '../Selectors';
import Button from './Button';

export class Explorer extends React.Component {
  constructor(props) {
    super();
  }
  
  componentDidMount() {
    
  }

  render() {
    const self = this;
    // console.log('this.props.repoList=',this.props.repoList[0]);
    // console.log('this.props=',this.props);
    
    const repoList = self.props.repoList ? 
      self.props.repoList.map( (item, i) => {
        return (
          <div key={i} className="item">
            <img src={item.owner.avatar_url} alt="owner avatar" height='150' width='150'></img>
            <div className="blockInfo">
              <div>id: {item.id}</div>
              <div>Name: {item.name}</div>
              <div>Description: {item.description}</div>
            </div>
          </div>
        );
      })
      :
      null;

    return (
      <div className='containerExplorer'>
        <div>
          <Button className="button" handleClick={self.props.previousPage}>Previous</Button>
          <Button className="button" handleClick={self.props.nextPage}>Next</Button>
        </div>
        {repoList}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    repoList: returnRepoPage(state.currentIndex, state.repoList),
    currentIndex: state.currentIndex,
    maxId: state.maxId,// used for since param in url
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    nextPage : () => {
      // dispatch(updateMaxId(currentIndex));
      dispatch(incrementCurrentIndex());
    },
    previousPage : () => {
      dispatch(decrementCurrentIndex());
    },
  };
}

//Connects the App component to the Redux store.
export default connect(mapStateToProps, mapDispatchToProps)(Explorer);

