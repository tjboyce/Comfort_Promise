import React, { Component } from 'react';
import xray_thumb_up from '../XrayProcedure/xray_thumb_up.jpg'


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class XrayProcedure  extends Component {
    handleClick= ()=>{
        this.props.history.push('/procedure/xray1')
    }

render () {
    return (
        <div id= "procedureDiv">
            <img src={xray_thumb_up} alt="handXray" id= "xray"  />

            <div>
                <h1>X-ray Procedure</h1>
                <button onClick = {this.handleClick}>Start Procedure</button>
            </div>
        </div>
    
    )
}


}

export default XrayProcedure;
