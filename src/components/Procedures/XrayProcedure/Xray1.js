import React, { Component } from 'react';
import xray1 from '../XrayProcedure/xray1.jpeg'
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class Xray1 extends Component {
    handleClick = () => {
        this.props.history.push('/procedure/xray2')
    }
    handleBack = ()=>{
        this.props.history.push ('/procedure')
    }

    render() {
        return (
            <div>
               
                <img src={xray1} alt="handXray" width="100%"  />
            
                    <h1>Some more text about xrays</h1>
                    
                <button onClick={this.handleBack}>Back to procedure home </button>
                <button onClick={this.handleClick}>Next</button>
               
            </div>

        )
    }


}

export default Xray1;
