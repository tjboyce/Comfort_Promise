import React, { Component } from 'react';
import { connect } from 'react-redux';
// import SelectAge from '../SelectAge/SelectAge';



// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class Resources extends Component {
  
  componentDidMount = ()=>{
 
  }
 

  


  render(){
    console.log('test:', this.props.projectReducer);
    
    return(
      <>
   
    <div>
   
      {/* <div key ={item.id}> */}
      {/* <h3>{this.props.item.age_group}</h3> */}
   
         {/* <iframe key = {item.id} src = {item.video} title = "infant video"/>
       <ul>
          <li>{item.resource1}</li>
         <li>{item.resource2}</li>
         <li>{item.resource3}</li>
         <li>{item.resource4}</li>
         <li>{item.resource5}</li>
       </ul>
      </div> */}
    
     </div>
 
    </>
    )
  }
}

const mapReduxStateToProps = reduxState => {
  return reduxState;
};

export default connect(mapReduxStateToProps)(Resources);
