import React, { Component } from 'react';
import { connect } from 'react-redux';
// import SelectAge from '../SelectAge/SelectAge';

// import Button from '@material-ui/core/Button'



// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class Resources extends Component {
  
  componentDidMount = ()=>{
 
  }
 
  // handleClick = (props) => {
  //  this.props.history.push('/age')
  // }
  


  render(){
    console.log('KIBRET:', this.props.projectReducer);
    
    return(
      <>
   
    <div>
          {/* <Button onClick={this.handleClick}>Test Button</Button> */}
    
     </div>
 
    </>
    )
  }
}

const mapReduxStateToProps = reduxState => {
  return reduxState;
};

export default connect(mapReduxStateToProps)(Resources);
