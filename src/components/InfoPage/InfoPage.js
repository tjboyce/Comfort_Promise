import React, { Component } from 'react';
import { connect } from 'react-redux';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class InfoPage extends Component {
  
  componentDidMount(){
    this.props.dispatch({type: 'FETCH_INFO'})
  }

  render(){
    console.log('test:', this.props.infoReducer);
    
    return(
  <div>
    <p>
      Info Page
      {JSON.stringify(this.props.infoReducer)}
    </p>
  </div>
    )
  }
}

const mapReduxStateToProps = reduxState => {
  return reduxState;
};

export default connect(mapReduxStateToProps)(InfoPage);
