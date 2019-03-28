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
            <div id="feedback">
               
                <img  src={xray1} alt="handXray" />

                    <h1>An x-ray is a picture of the inside of your body. Your bones show up really well in x-rays.</h1>
                    
                <button  className="buttonA" onClick={this.handleBack}>Back </button>
                <button className="buttonA" onClick={this.handleClick}>Next</button>
               
            </div>

        )
    }


}

export default Xray1;
