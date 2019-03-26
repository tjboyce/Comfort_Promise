import React, { Component } from 'react';
import xray1 from '../XrayProcedure/xray1.jpeg'


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
        <div>
            <img src={xray1} alt="handXray" width="100%" />

            <div>
                <h1>X-ray Procedure</h1>
                <button onClick = {this.handleClick}>Start Procedure</button>
            </div>
        </div>
    
    )
}


}

export default XrayProcedure;
