import React from 'react'
import {
  incrementCurrentIndex,
  decrementCurrentIndex,
  setCurrentIndex,
  resetCurrentIndex,
  resetRepoList,
  incrementChapterId,
  decrementChapterId,
  addChapter,
} from '../actions';
import { connect } from 'react-redux';
import {returnRepoPage} from '../Selectors';
import Button from './Button';
import { getRepos } from '../helpers';
import { NB_REPO_PER_PAGE, NB_REPO_PER_CHAPTER } from '../Constant';

export class Explorer extends React.Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    this.props.initChapter();//we init the chapter id (the first 10 pages)
  }

  render() {
    const self = this;

    const repoList = self.props.repoListPageContent ? 
      self.props.repoListPageContent.map( (item, i) => {
        return (
          <div key={i} className="item">
            <img className="img" src={item.owner.avatar_url} alt="owner avatar" ></img>
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
      <div>
        <div className="btnGroup"> 
          <Button className="button" handleClick={() => self.props.previousPage(self.props)}>Previous</Button>
          <Button className="button" handleClick={() => self.props.nextPage(self.props)}>Next</Button>
        </div>
        <div className='infoPagination'>
          <div>Chapter:{self.props.chapterId} / Page:{self.props.currentIndex/10 + 1}</div>
        </div>
        <div className='error'>{self.props.error}</div>
        <div className='containerExplorer'>     
          {repoList}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    firstId: state.firstId,
    repoList: state.repoList,
    repoListPageContent: returnRepoPage(state.currentIndex, state.repoList),
    currentIndex: state.currentIndex,
    minId: state.minId,
    maxId: state.maxId,
    previousRepoListIdMin: state.previousRepoListIdMin,
    chapterId: state.chapterId, // id of the current chapter (10 pages)
    chapterId2MinId: state.chapterId2MinId, // array giving the min id for each chapter explored
    error: state.error,
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    nextPage : (props) => {
      if ( props.currentIndex === NB_REPO_PER_CHAPTER - NB_REPO_PER_PAGE ) {//90
        // We save the min id of the page we are leaving in order to 
        // be able to come back to this page later 
        //dispatch(setPreviousRepoListIdMin(props.minId));
        dispatch(resetCurrentIndex());
        dispatch(resetRepoList());
        getRepos(dispatch, props.maxId);//we add the new repo list to the store
        dispatch(incrementChapterId());//new chapter
        dispatch(addChapter(props.minId));
      } else {
        dispatch(incrementCurrentIndex());//next page
      }
    },
    previousPage : (props) => {
      if ( props.currentIndex === 0 && props.minId !== props.firstId) {
        dispatch(resetRepoList());
        getRepos(dispatch, props.chapterId2MinId[props.chapterId - 2] - 1);
        dispatch(setCurrentIndex(NB_REPO_PER_CHAPTER - NB_REPO_PER_PAGE));//90
        dispatch(decrementChapterId());//previous chapter
      } else {
        dispatch(decrementCurrentIndex());//previous page
      }
    },
    initChapter: () => {
      dispatch(incrementChapterId());//new chapter
    },
  };
}

//Connects the App component to the Redux store.
export default connect(mapStateToProps, mapDispatchToProps)(Explorer);

