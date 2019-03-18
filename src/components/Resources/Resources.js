import React, { Component } from 'react';
import { connect } from 'react-redux';
import Feedback from '../Feedback/Feedback';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class Resources extends Component {
  
  componentDidMount = ()=>{
    this.props.dispatch({type: 'FETCH_INFO'})
  }
 

  


  render(){
    console.log('test:', this.props.projectReducer);
    
    return(
      <>
    <div>
     {this.props.projectReducer.map((item)=>(
      <div key ={item.id}>
      <h3>{item.age_group}</h3>
         <video key = {item.id} src ={item.video}/>
       <ul>
          {item.video}
         <li>{item.resource1}</li>
         <li>{item.resource2}</li>
         <li>{item.resource3}</li>
         <li>{item.resource4}</li>
         <li>{item.resource5}</li>
       </ul>
      </div>
     ))}
     </div>
     <Feedback />
    </>
    )
  }
}

const mapReduxStateToProps = reduxState => {
  return reduxState;
};

export default connect(mapReduxStateToProps)(Resources);
